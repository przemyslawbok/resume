# File organization

This section is going to be gradually updated with rising project complexity.

**1. Components**

Each component should be created under a separate folder with the same name. In order to keep the code clean and readable, it should be split into several files:
* ComponentName.tsx - the main component file
* ComponentName.data.ts - (optional) file containing component-specific data like constants, enums, types and interfaces
* ComponentName.logic.ts - (optional) file containing functions that contain business logic, conditions, custom validations
* ComponentName.styling.ts - (optional) file containing styled components and other visual elements
* index.ts - re-export component and optionally other stuff needed outside of the folder (for easier imports and shorter import paths)

>Example:  
>|_ components  
>&nbsp;&nbsp;|_ ComponentName  
>&nbsp;&nbsp;&nbsp;&nbsp;|_ ComponentName.tsx  
>&nbsp;&nbsp;&nbsp;&nbsp;|_ ComponentName.data.ts  
>&nbsp;&nbsp;&nbsp;&nbsp;|_ ComponentName.logic.ts  
>&nbsp;&nbsp;&nbsp;&nbsp;|_ ComponentName.styling.ts  
>&nbsp;&nbsp;&nbsp;&nbsp;|_ index.ts  

When creating new components, we have to consider their potential usage. We can split components into two categories:  
* common components that can be reused across the whole application  
* page-specific components  

Components in the first category should be put directly under /components folder.

>Example:  
>|_ components  
>&nbsp;&nbsp;|_ Loader  
>&nbsp;&nbsp;|_ Navbar  
>&nbsp;&nbsp;|_ LogOutButton  
>&nbsp;&nbsp;|_ ...  

Components in the second category should be put under /components/pages/{pageName} folder.

>Example:  
>|_ components  
>&nbsp;&nbsp;|_ pages  
>&nbsp;&nbsp;&nbsp;&nbsp;|_ Admin  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ CreateResumeButton  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ ...  
>&nbsp;&nbsp;&nbsp;&nbsp;|_ Home  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ LogInButton  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ Wrapper  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_ ...  

**2. Pages**

All page components need to be put under /pages folder in the root of the application in order for Next.js to be able to handle routing.

All page components should be created in separate folders. The only files directly in the pages folder should be: 
* _app.tsx, 
* _document.tsx 
* index.tsx (containing Home page component).

>Example:  
>|_ pages  
>&nbsp;&nbsp;|_ [username]  
>&nbsp;&nbsp;&nbsp;&nbsp;|_ index.tsx  
>&nbsp;&nbsp;|_ admin  
>&nbsp;&nbsp;&nbsp;&nbsp;|_ index.tsx  
>&nbsp;&nbsp;|_ \_app.tsx  
>&nbsp;&nbsp;|_ \_document.tsx  
>&nbsp;&nbsp;|_ index.tsx  

**3. Common folder**

In /common folder we're going to primarily keep constants, enums, configuration objects and similar items used across entire application. Routes is a good example for this.

**4. Utils folder**

In /common folder we're going to keep common functionality used across entire application.
This will include:
* React contexts
* Firebase configuration
* Custom hooks
* Utility functions