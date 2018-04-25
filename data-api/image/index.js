import AWS from 'aws-sdk'
import uuid from 'uuid/v4'
import fs from 'fs'
import rimraf from 'rimraf'
import Organization from '../db/models/Organization'

const s3 = new AWS.S3()

export default async function (req,res, next) {
  try {

    console.log(req.file)

    const {
      file: {
        mimetype,
        buffer
      },
      body: {
        subdomain,
        title,
        description
      }
    } = req

    const organization = await Organization.findOne({
      where: {
        subdomain
      }
    })

    let image = await organization.createImage({
      title,
      description
    })


    const fileId = image.id

    console.log(fileId)

    await upload({
      Key: `${fileId}/original.jpeg`,
      Bucket: "mia-lume",
      Body: buffer,
      ACL: "public-read",
      ContentType: mimetype,
      Tagging: `organization=${organization.id}`
    })


    res.json({
      msg: "success"
    })


  } catch (ex) {
    console.log(ex)
  }
}

function upload (params) {
  return new Promise( (resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
