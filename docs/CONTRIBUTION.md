# Contribution Rules

## Style and Naming convensions

### Tools

- `Markdownlint` VS extension
- `ESLint` VS extension

### Naming convension for Typescript projects

- Directories, endpoints, and database fields use kabab style `ex: get-my-tasks`
- Files use lowercaelcase with .type `ex: userXxYyZzz.contoller.ts`
- Internal variables use lowercamelcase `ex: getUserById`
- classes and Interfaces use uppercamelcase and begin with capital `I` for interface when use it. `ex:IUser`
- CRUD convension is add, delete, update, and get

### Naming convension for C# projects

- endpoints, and database fields use kabab style `ex: get-my-tasks`
- classes and Interfaces use uppercamelcase and begin with capital `I` for interface when use it. `ex:IUser`

### Git commits

- No bulk commit, One chnage is one commit
- Let commit message short, descriptive, and begin with verb

### Notes

- Make one interface for each layer
- No Overlap among the layres
