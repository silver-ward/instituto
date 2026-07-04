## 1 O que é encapsulamento?

Encapsulamento em OOP se refere a:  
1. A combinação de dados e os métodos que manipulam esses dados.  
2. A separação clara entra essa combinação e o código externo.  

É dizer, no lado de dentro de uma classe encapsulada, temos todos os atributos dessa classe, assim como todos os seus métodos, que manipulam esses atributos. Se um atributo "velocidadeDeProcessamento" de uma classe "Computador" precisa que cálculos sejam executados para definir o seu próprio valor, as ferramentas necessárias para esses cálculos precisam estar dentro da própria classe Computador. Nesse exemplo, isso poderia se concretizar por meio de atributos como "larguraBarramento" e "memoriaCache", e métodos como "calcularGargaloCache(memoriaCache, larguraBarramento)".  

Além de manter todas as ferramentas disponíveis internamente, o encapsulamento também busca garantir que todas as regras de manipulação de dados sejam definidas e executadas internamente. Isso significa que nenhum dos atributos internos de uma classe devem ser externalizados e suscetibilizados a alterações por agentes externos que não conhecem as regras de manipulação de cada um desses atributos.  

A interação entre o código externo e o código interno, encapsulado, se dá por meio de interfaces - isto é, o código interno exterioriza apenas um controle limitado e simplificado das suas atividades internas. Isso é análogo à forma como um cliente de um supermercado: pode ver os preços, mas não alterá-los; sabe quais formas de pagamento estão disponíveis, mas não como elas acontecem; ou pode manipular produtos desde que sem danificá-los antes que certos protocolos de transação tenham sido finalizados.

## 2 Qual é a vantagem de utilizar-se atributos privados?

A utilização de atributos privados nos dá a chance de proteger esses atributos contra dados irregulares que podem causar erros no sistema. Por meio de interface, atributos públicos são disponibilizados para agentes externos e, quando escritos, esses atributos públicos são submetidos a todas as regras de manipulação de dados contidas na classe antes de serem escritos nos atributos privados.  

A lógica dessa dinâmica é simples: atributos públicos são escritos por agentes externos e podem conter erros ou não estarem normalizados; enquanto isso, atributos privados foram escritos pela própria classe, de acordo com as suas regras internas e, portanto, é esperado que estejam validados, normalizados e prontos para serem armazenados no banco de dados.

## 3 Qual é a diferença entre `getNome()` e `setNome()`?

Por convenção, o prefixo "get" indica que o método apenas lê um valor; enquanto que o o prefixo "set" indica que o método escreve um valor - isto é, o define.

## 4 O que faz a palavra-chave `extends`?

Essa palavra reservada permite que uma classe herde as funcionalidades de outra classe. Quando uma subclasse "extende" as funcionalidades de uma superclasse, os objetos dessa subclasse podem executar não apenas os seus próprios métodos, mas também os métodos da superclasse.

Essa herança ainda respeita as regras de encapsulamento. Sendo assim, uma subclasse não pode modificar elementos privados da sua superclasse. 

## 5 Uma classe filha pode utilizar métodos da classe pai? Explique.

Quando o objeto de uma subclasse é instanciado, esse objeto tem acesso às funcionalidades tanto da subclasse quanto da superclasse, como se fosse a combinação de um objeto comum de uma classe A e outro objeto comum de uma classe B. Isso significa que as regras de acesso continuam iguais: a subclasse e seus objetos acessam apenas as partes públicas da superclasse. A herança funciona como uma canalização, dois ponteiros que apontam para o mesmo endereço. Isso permite o reaproveitamento de código já escrito.

## 6 Por que utilizar validações dentro dos métodos de uma classe?

Além do simples fato de que, por exemplo, é preciso validar que um cliente tenha R$20 antes de executar um método que lhe dará R$20, os dados digitais também precisam se encaixar em certos moldes para que sejam utilizáveis pelo sistema.  

Um desses moldes é o tipo. Se um método esperava receber o tipo integer 20, mas acabou recebendo o tipo string '20', o sistema não será capaz de processar esse dado corretamente e deve, portanto, rejeitar a operação ou, talvez, tentar converter o string para integer e prosseguir apenas caso a conversão seja bem sucedida.  

Outro desses moldes é a própria lógica do sistema. Se uma parte do código está preparada para receber apenas um sobrenome para depois adicioná-lo a uma string 'Olá Sr. ', o código deve se certificar que "sobrenome" não receba, por exemplo, o valor 'Digite seu nome completo: Eduardo'. Caso contrário, aquela parte do código que presumia receber apenas um sobrenome irá produzir a mensagem "Olá Sr. Digite seu nome completo: Eduardo".  

## 7 Qual é a diferença entre herança e reutilização de código por cópia?

Em termos de processamento, os dois são praticamente iguais. Entretanto, em termos de manutenibilidade, apontar para uma mesma fonte de código costuma ser bem menos custoso. Isso porque se um código é copiado em diferentes partes do sistema, se torna difícil sincronizá-lo. Se alguém decide atualizar o código, terá que achar e atualizar todas as suas cópias em diferentes partes do sistema; ou alguém pode atualizar apenas uma das cópias sem saber que existem outras; e se a cópia for escrita manualmente, uma equipe perde tempo reescrevendo uma mesma solução que poderia ter sido facilmente encapsulada e reutilizada numerosas vezes.