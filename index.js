Class = [
    {
        "ID": "BasicTechnicalWriting",
        "ImageUrl": "https://metapercept.com/images/training-certification/Basic-DITA%E2%80%93XML.jpg",
        "Name": "Basic Technical Writing",
        "ShortDesc": "This course focuses on understanding the basics of technical writing and developing technical writing skills. In this course you will learn techniques to analyze writing contexts which helps you to produce effective, clean, and reader-center documents efficiently."
    },
    {
        "ID": "ConfluenceAdvanced",
        "ImageUrl": "https://metapercept.com/images/training-certification/Advanced-DITA–XML.jpg",
        "Name": "Confluence Advanced",
        "ShortDesc": "This course focuses to ensure your documentation-type content is easy to manage and consume. This skill builder covers useful techniques to surface relevant documentation and standardize your content using templates and blueprints. It includes how to set up a knowledge-base in Confluence for self- service customer support in JIRA Service Desk. It is useful for both Confluence Server Administrators and Confluence Cloud Administrators."
    },
    {
        "ID": "ConfluenceBasic",
        "ImageUrl": "images/training-certification/Authoring-Tools.jpg",
        "Name": "Confluence Basic",
        "ShortDesc": "This course guide end users to create their own easy to use and well-formatted content. This Skillbuilder covers templates, page and space structure, and categorization for content governance and discovery. It includes using cases, common/practical examples, best practices, and suggested solutions to structure and display your Confluence space content effectively using built-in features."
    },
    {
        "ID": "XMLAuthor",
        "ImageUrl": "images/training-certification/Simplified-Technical-English.jpg",
        "Name": "XML Author",
        "ShortDesc": "This course focuses deepen the knowledge in XML Author, in any industry. In this course, you'll learn about writing content in a fully structured and easy–to–use environment optimized for producing valid XML and production of multiple outputs for print and online delivery."
    },
    {
        "ID": "AdvancedTechnicalWriting-API",
        "ImageUrl": "images/training-certification/Technical-Writing.jpg",
        "Name": "Advanced Technical Writing - API",
        "ShortDesc": "This course focuses on deepening the knoweldge of technical content deliverable, containing instructions about how to effectively use and integrate with an API. It’s a concise reference manual containing all the information required to work with the API, with details about the functions, classes, return types, arguments and more, supported by tutorials and examples."
    },
    {
        "ID": "BasicDITA-XML",
        "ImageUrl": "images/training-certification/Authoring-Tools.jpg",
        "Name": "Basic DITA-XML",
        "ShortDesc": "This course focuses on individuals keen to broaden their knowledge or specialize in basic DITA- XML, in any industry. This course, focuses on what writers of business documents need to think and do differently to get their jobs done quickly and efficiently with DITA."
    },
    {
        "ID": "AdvancedDITA-XML",
        "ImageUrl": "images/training-certification/Basic-DITA–XML.jpg",
        "Name": "Advanced DITA-XML",
        "ShortDesc": "This course focuses on individuals keen to broaden their knowledge or specialize in advanced DITA- XML, in any industry. This course, focuses on what writers of business documents need to think and do differently to get their jobs done quickly and efficiently with DITA."
    },
    {
        "ID": "xMetaLAuthor",
        "ImageUrl": "images/training-certification/Advanced-DITA–XML.jpg",
        "Name": "xMetal Author",
        "ShortDesc": "Learn xMetal for XML based authoring to manage high volume structured content development and management. This training program is meant for the Technical Writers, Technical Authors, and Information Developers, working on high-end documentation for Automobile, Aerospace, Hardware, and Manufacturing business domains."
    },
    {
        "ID": "MadCapFlare",
        "ImageUrl": "images/training-certification/Technical-Writing.jpg",
        "Name": "MadCap Flare",
        "ShortDesc": "This course focuses on developing technical writing skills to deepen the knowledge of Madcap Flare for writing specialized content in structured format using DITA-XML and other structured formats. This course use a combination of lectures, demonstrations, and hands-on practice exercises to explore the major features of Flare."
    }
]

let ClassContainer = document.querySelector(".class-container");



let printerfunction = (req) => {

    req.map((item) => {
        let outletdiv = document.createElement('div')
        outletdiv.setAttribute('class', 'outlet-div')

        let imagediv = document.createElement('div')
        imagediv.setAttribute('class', 'outlet-img')

        let image = document.createElement('img')
        image.setAttribute('src', `https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993__340.png`)
        image.setAttribute('class', 'image')

        imagediv.append(image)

        let heading = document.createElement('h5')
        heading.setAttribute('class', 'outlet-heading')
        heading.innerHTML = item.Name

        let content = document.createElement('p')
        content.setAttribute('class', 'outlet-content')
        content.innerHTML = item.ShortDesc

        let viewbtn = document.createElement('button')
        viewbtn.setAttribute('class', 'view-btn')
        viewbtn.innerHTML = 'View'

        outletdiv.append(imagediv, heading, content,viewbtn)
        ClassContainer.appendChild(outletdiv)
    })


}
printerfunction(Class)
