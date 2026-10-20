## Bloco VIII - Diagrama de Classes UML com PlantUML
### Prof. Leandro Vaguetti

### Introdução

Neste bloco estudaremos conceitos do Diagrama de Classe UML, bem como o desenvolvimento prático de dois Diagramas de Classe utilizando a ferramenta PlantUML.

### Estrutura:  
> @startuml  
> class Pessoa {  
>   \- nome : String  
>   \+ setNome(String nome) : boolean  
>   \+ getNome() : String  
> }  
>  
> class Aluno {  
>   \- matricula : String  
>   \+ setMatricula(String matricula) : boolean  
>   \+ getMatricula() : String  
> }  
>  
> Pessoa <|-- Aluno  
> @enduml  

> **+** Public member  
> Full visibility.

> **-** Private member  
> Visibible to the class itself.

> **#** Protected member  
> Visible to the class and its subclasses only.

> **~** Package member  
> Visible only to classes within the same package.

### Associações:
> Inheritence **<|--**   
> An inheritence or Generalization/Specialization relationship between Superclass and Subclass respectively.  
> `Pessoa <|-- Aluno`  

> Simple Association **--**  
> A relationship between two classes.  
> `Pessoa "1" -- "1..*" Conta`  

> Aggregation Association **o--**  
> A relationship where the child can exist independently of the parent  
> `Casa o-- "0..*" Tijolo`  

> Composition Association ***--**  
> A relationship where the child cannot exist independently of the parent.  
> `Casa "1" *-- "0..*" Quarto`  

### Formatação:
> **Resize or remove icons:**  
> `skinparam classAttributeIconSize 0`   
>  
> **Describe associations:**  
> Casa "1" o-- "0..*" Tijolo `: tijolo continua existindo sem a casa`  


#### PlantUML:
https://plantuml.com/

#### PlantText:
https://www.planttext.com/