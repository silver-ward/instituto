# 1 O que é encapsulamento?

Encapsulamento em OOP se refere a:  
1. A combinação de dados e os métodos que manipulam esses dados.  
2. A separação clara entra essa combinação e o código externo.  

É dizer, no lado de dentro de uma classe encapsulada, temos todos os atributos dessa classe, assim como todos os seus métodos, que manipulam esses atributos. Se um atributo "velocidadeDeProcessamento" de uma classe "Computador" precisa que cálculos sejam executados para definir o seu próprio valor, as ferramentas necessárias para esses cálculos precisam estar dentro da própria classe Computador. Nesse exemplo, isso poderia se concretizar por meio de atributos como "larguraBarramento" e "memoriaCache", e métodos como "calcularGargaloCache(memoriaCache, larguraBarramento)".  

Além de manter todas as ferramentas disponíveis internamente, o encapsulamento também busca garantir que todas as regras de manipulação de dados sejam definidas e executadas internamente. Isso significa que nenhum dos atributos internos de uma classe devem ser externalizados e suscetibilizados a alterações por agentes externos que não conhecem as regras de manipulação de cada um desses atributos.  

A interação entre o código externo e o código interno, encapsulado, se dá por meio de interfaces - isto é, o código interno exterioriza apenas um controle limitado e simplificado das suas atividades internas. Isso é análogo à forma como um cliente de um supermercado: pode ver os preços, mas não alterá-los; sabe quais formas de pagamento estão disponíveis, mas não como elas acontecem; ou pode manipular produtos desde que sem danificá-los antes que certos protocolos de transação tenham sido finalizados.

# 2 Qual é a vantagem de utilizar-se atributos privados?

# 3 Qual é a diferença entre `getNome()` e `setNome()`?

# 4 O que faz a palavra-chave `extends`?

# 5 Uma classe filha pode utilizar métodos da classe pai? Explique.

# 6 Por que utilizar validações dentro dos métodos de uma classe?

# 7 Qual é a diferença entre herança e reutilização de código por cópia?