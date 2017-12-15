const config = {
  fields: [
    {
      name: "title",
      database: {
        column: "title",
        type: "STRING"
      },
      graphql: {
        field: "title",
        type: "String"
      },
      cms: {
        type: "input"
      },
      lume: {
        element: "h2",
        position: "side"
      }
    }, {
      name: "description",
      database: {
        column: "description",
        type: "TEXT"
      },
      graphql: {
        field: "description",
        type: "String"
      },
      cms: {
        type: "textarea"
      },
      lume: {
        element: "p",
        position: "side"
      }
    },{
      name: "image0",
      database: {
        column: "image0Id",
        type: "UUID"
      },
      graphql: {
        field: "image0",
        arg: "image0Id",
        type: "image"
      },
      cms: {
        type: "image"
      },
      lume: {
        element: "zoomer",
        position: "main"
      }
    },
  ]
}


export default config
