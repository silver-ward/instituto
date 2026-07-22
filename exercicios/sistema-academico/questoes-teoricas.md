## 1 Qual é a diferença entre módulo e classe?

Módulo é um mecanismo de organização de arquivos JavaScript que permite a exportação e importação desses arquivos, viabilizando a sua reprodução.

Classe é um modelo para criação de objetos (por si só, esse modelo só é utilizável dentro do mesmo arquivo). Isso também permite a reprodução de funções e propriedades, mas de forma individualizada para cada instância.

Módulos e classes são usados em conjunto, permitindo que o modelo estrutural das classes seja exportado para que objetos instanciem esse modelo em outros arquivos.

Aproximando a comparação, é possível dizer que a classe proporciona a reutilização de código em nível local e organizado em instâncias, enquanto que o módulo possibilita a reutilização de código entre arquivos

## 2 Por que utilizar encapsulamento?

O encapsulamento garante a integridade dos dados e a organização do código ao manter as regras de escrita dos valores de uma classe contidas nela mesma. Isso evita que validações sobre um dado fiquem espalhadas pelo código, aumentando a chance de haverem disparidades.

## 3 Qual a vantagem de reutilizar funções em uma biblioteca?

Evitar a repetição e manter a organização do código por meio da separação de funções.

## 4 Para que serve `super`?

Dentro de uma subclasse que está herdando uma superclasse, a palavra "super" serve para referenciar e acessar elementos da superclasse e.g. se a classe "Pessoa" está sendo herdada, `super.getNome()` atua como `Pessoa.getNome()`.

## 5 Qual a diferença entre herança e sobrescrita?

"Herança" descreve a possibilidade de uma subclasse incorporar em si os métodos de uma superclasse. "Sobrescrita" descreve a possibilidade de uma subclasse reescrever os métodos herdados. Essa reescrita muda o comportamento de um método enquanto na subclasse sem alterar o método na superclasse, ou seja, mantém o mesmo nome do método original, mas segue as regras postas pela subclasse.

## 6 Por que a validação do e-mail deve ocorrer dentro de setEmail() utilizando a biblioteca?

Porque isso aproxima as regras de escrita de dados à escrita em si. Se a validação dos dados ocorresse, por exemplo, junto da instanciação de cada objeto da classe dentro do arquivo main.js, isso tornaria a validação volátil, pois seria realizada múltiplas vezes no código, podendo sofrer mudanças a cada vez.

## 7 Em quais situações utilizar `&&` e `||`?

A porta lógica E `&&` exige que duas condições sejam verdadeiras antes que um bloco seja executado.

A porta lógica OU `||` exige que ao menos uma das duas condições sejam verdadeiras antes que um bloco seja executado. 