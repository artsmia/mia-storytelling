import {
  Story,
  Picture,
  Content,
  Group,
  Image,
  Obj,
  Organization,
  User_Organization
} from './models'


export async function createAssociations() {
  try {


    Content.belongsTo(Story, {
      as: "story",
    })

    Content.belongsTo(Image, {
      as: "image0",
    })

    Content.belongsTo(Image, {
      as: "image1",
    })

    Content.belongsTo(Obj, {
      as: "obj",
    })

    Group.belongsToMany(Story, {
      as: "groups",
      through: "story_group",
    })

    Group.belongsTo(Organization, {
      as: "organization"
    })


    Image.belongsTo(Organization, {
      as: "organization"
    })


    Obj.belongsTo(Image, {
      as: "primaryImage"
    })

    Obj.hasMany(Content, {
      as: "contents"
    })


    Organization.hasMany(Story, {
      as: "stories"
    })

    Organization.hasMany(Image, {
      as: "images"
    })

    Organization.hasMany(Group, {
      as: "group"
    })

    Organization.hasMany(User_Organization, {
      as: "users"
    })

    Story.belongsToMany(Group, {
      as: "groups",
      through: "story_group",
    })

    Story.belongsToMany(Story, {
      as: "relatedStories",
      through: "story_story"
    })

    Story.belongsTo(Organization, {
      as: "organization"
    })

    Story.belongsTo(Image, {
      as: "previewImage",
    })

    Story.hasMany(Content, {
      as: 'contents'
    })

    User_Organization.belongsTo(Organization, {
      as: "organization"
    })

  } catch (ex) {

    console.log("createAssociations ex", ex)
    process.exit(1)
  }
}