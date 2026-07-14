## 1 Qual a diferença entre herança e sobrescrita de métodos?

"Herança" descreve a possibilidade de uma subclasse incorporar em si os métodos de uma superclasse. "Sobrescrita" descreve a possibilidade de uma subclasse reescrever os métodos herdados. Essa reescrita muda o comportamento de um método enquanto na subclasse sem alterar o método na superclasse, ou seja, mantém o mesmo nome do método original, mas segue as regras postas pela subclasse.

## 2 Para que serve a palavra-chave super?

Dentro de uma subclasse que está herdando uma superclasse, a palavra "super" serve para referenciar e acessar elementos da superclasse e.g. se a classe "Pessoa" está sendo herdada, `super.getNome()` atua como `Pessoa.getNome()`.

## 3 Qual a vantagem de reutilizar métodos da classe pai?

Evitar cópias de código que executam a mesma função e manter uma lógica organizacional de funções.

## 4 Por que utilizar atributos privados (`#`)?

Os atributos privados protegem dados contra fontes externas que podem não seguir os padrões de validação e tratamento necessários ao escrever valores.

## 5 Qual a diferença entre `!=` e `!==`?

A inequação ampla `!=` tenta transformar dois valores no mesmo tipo e compara se os valores resultantes são diferentes um do outro.
Por exemplo, o número 7 e o texto '7' seriam considerados iguais.

A inequação estrita `!==` compara se dois valores são diferentes um do outro, inclusive em termos de tipo.
Por exemplo, o número 7 e o texto '7' seriam considerados diferentes.

## 6 Qual a função do método `includes()`?

Essa função checa se a string argumento pode ser encontrada dentro da string objeto. Por exemplo, email.includes('@') retorna verdadeiro se o caractere '@' for encontrado em qualquer parte do valor do objeto email.

## 7 Em que situação a sobrescrita é mais indicada do que criar um método completamente novo?

Caso a função do método seja, em prática, a mesma. Por exemplo, quando um método só precisa de alguns ajustes para funcionar corretamente com os objetos de uma subclasse. Outro fator a se considerar é a organização do programa: caso existam vários outros métodos que seguem um mesmo padrão, pode não valer a pena mudar o nome de apenas um método de uma classe só por que o seu funcionamento interno é diferente. Pode ser melhor manter uma lógica de uso na qual, por exemplo, todos os métodos que retornam certos valores sempre são chamados de `getValor()`.