# LibraryManager
Typescript Project Library Manager


#Variables Scoping
#Function Types
- You can assign function to variable for the type as well as the whole function.
- In JS all parameters are optional, whereas in TypeScript all parameters are required.
- You can make typescript variables as optional by using ? after the parameter. e.g. functionName(param ?: type)
-- Rest Parameters: 
    - Collects a group of parameters into a single array.
    - Denoted with an ellipsis prefix on last paramter.
    - e.g. GetBookReadForCust(name: String, ...bookIds: number[]){}
    -- GetBookReadForCust('xyz', 10,102,100, 234);
- Function Overloading available in Typescript.
#Interface 
- Contracts that defines types
- Compiler enforces the contract via type definition
- Collection of property and methods definition
