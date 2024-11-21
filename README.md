REACT - Advanced Front-end Technology
-------------------------------------------

Basic concepts
---------------

-React App is a collection of libraries
-Components: part of user interface
-react app is a collection of Components
-components are aranged in tree like structure
-there will be a root component in a react app which is commonly known as 'App'
-react used to create single page web application
-Declerative approach
-Virtual DOM: light weight memory representation of real DOM
-reconciliation
-jsx(javascript xml):language used to write code in react
            ex- const heading=<h1> heading1</h1>
            -rules for using jsx elements
                -every jsx elements must be inside a single parent tag
                -every tag must has a closing tag ex: <br /> 
                -parent tag can be any container tag/react fragment(<>..</>)
            -Attribute class is 'className' in jsx
            -jsx using camel className
            -instead attribute 'for' use 'htmlfor' in jsx
            -to provide js expresson in jsx - use {js-expression}

React App Creation:-

    1.CRA (create-react-app) command
    2.vite : building tool for creating web project

    -installing vite globally -npm i -g create-vite
    -create react app using vite - npm create vite@latest

React App and Folder structure
---------------------------------
    -vite.config.js      -- vite configuration file
    -README.md           -- documentation about your project
    -package.json        -- npm configuration file for the project
    -package-lock.json   -- conatain version history of all packages installed in the project
    -.gitignore          -- contain files/folder name which is ignored while adding to git
    -index.html          -- entry page to react app
    -nodemodules folder  -- used to hold copies of dependent libraries of react project(we can install using the comma,d:npm install)
    -public folder       -- react project can access data stored in public foldr as globally
    -src folder          -- define react app here
    -assets folder       -- used to hold media file used in react app
    -main.jsx            --create a Rect DOM with parent node as div with id 'root'
and render the parent (App) component inside the node 

-babel library-transpile jsx code to simple react function which is understand by browser
-high performance
-Data binding - one way data binding (data transfer from parent to child component)

command to run project:- npm run dev

-componet :part of UI ,independent and reusable code

            -rules for creating Components
                -create a js/jsx file,file name must start with capital letter
            2 Types of components
                -class based component :uses class to create component
                    -   stateful component

                -Functional component : uses function to create component,return jsx code
                    -   stateless component

            -difference between functional and class components

            Functional Component                             class based componet
            --------------------------------------   ----------------------------------------
            -js pure function to accept props         -is class extended from react component.it's render
              and return jsx elements                  function return jsx elements
            -it execute from top to bottom,
             it return jsx,then it cannot be alive    -component alive dependency on different life cycle
            -stateless component                       -statefull component
            -Hooks are used                            -hooks are not used
            -life cycle methods not available          -can use life cycle methods
            -no need of render function                - it require render method to return jsx
            -no need of constructor                     - constructor used to initialize state




            and return jsx elements

-data binding(one-way data binding)
    -props object:property of component, using props a component can get the shared data from it's parent , props will get as an 'argument' of functional component

-styling react components using css 

    -using inline css:using style attribute
        syntax: style={{property:value,property:value....}}
    -using external css:using external css file,import the css file in the component


    -using  css moudule file: file with exstension as .module.css is known as css module file.

    -React Event binding
    ---------------------
    -binding a function without argument
        syntax:-event={function_name}

    -binding a function with argument
        syntax:-event={()=>function_name()}
    -binding a function with event as an argument
        syntax:-event={(e)=>function_name(e)}

-conditional rendering: based on condition we can control the jsx element in the browser
    -if statement: use truthy operator(&&)
    -if-else statement: use ternary operator(?:)

-State: state is an object used to store data/information regarding component,whenever the state changes , component re-render

-life cycle methods  of components
        -mounting phase :putting jsx elemts into DOM
                -constructor()
                -getDerivedStateFromProps()
                -render()
                -componentDidMount()
        -updating phase
                -getDerivedStateFromProps()
                -shouldComponentUpdate()
                -render()
                -getSnapshotBeforeUpdate()
                -componentDidUpdate()
        -unmounting phase:Removing component from DOM
                -componentDidUpdate()

-React Hooks: predefined function used to provide component features in functional based component

Hooks: function with function_name starts with 'use' keyword

        -to use a hook in functional component we must want to call it

        rules for calling hooks in functional componet
        ----------------------------------------------
        1.import hook from react,in the component
        2.hooks can called at the top level of component
        3.hooks cannot be conditional

        types of hooks:
        -------------------

        1.predefined hooks
                -useState():to create state in functional component
                syntax:-const[state name,state updating function_name]=useState(initial value)
                -useEffect(function,dependency):used to provide side effect to your component

                        function:used to define the side effect applied to component
                        dependency:based on dependency useEffectWill get called
                            -no dependency
                            -[]-call useEffect only at the time of component Creation
                            -[data]-useEffect hook will call at the time of component creation as well as data changes
        2.customized hooks

        -styling framework react compoents

            -material ui
            -react-bootstrap - install: npm i react-bootstrap bootstrap

        -setting up path for react component using react router dom
            -install npm i react-router-dom
            -react app must be render inside <BrowserRouter>
            -components needs to set up path  must inside <Routes> component of react-router-dom in App.jsx
            -using <Route> component define path for each component

        -how to deploy a json file using node.js
        -----------------------------------------

        -create index.js file in server folder
        -update script in package.json file as "start":"node index.js"
        -create .gitignore file and add 'node_modules' folder
        -define json-server to run json file in index.js


