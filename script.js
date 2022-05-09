ver1 = 'Ele governa para sempre com o seu poder, seus olhos vigiam as nações; que os rebeldes não se levantem contra ele! Salmos 66:7'

ver2 = 'Não há absolutamente ninguém comparável a ti, ó Senhor; tu és grande, e grande é o poder do teu nome. Jeremias 10:6'

ver3 = 'Pois o Senhor é grande e muitíssimo digno de louvor, ele deve ser mais temido que todos os deuses. 1 Crônicas 16:25'

ver4 = 'Será que você não sabe? Nunca ouviu falar? O Senhor é o Deus eterno, o Criador de toda a terra. Ele não se cansa nem fica exausto; sua sabedoria é insondável. Isaías 40:28'

ver5 = 'Deus é espírito, e importa que os que o adoram o adorem em espírito e verdade. João 4:24'

ver6 = 'E faço misericórdia em milhares aos que me amam e guardam os meus mandamentos. Êxodo 20:6'

ver7 = 'Porque Deus amou o mundo de tal maneira que deu seu filho unigênito, para todo aquele que nele crê não pereça, más tenha vida eterna. João 3:16'

ver8 = 'Porque todos sois filhos de Deus pela fé em Cristo Jesus. Gálatas 3:26'

ver9 = 'Amarás, pois, o Senhor, teu Deus, de todo o teu coração, e de toda a tua alma, e de todo o teu poder. Deuteronômio 6:5'

ver10 = 'Não te deixes vencer do mal, más vence o mal com o bem. Romanos 12:9'

ver11 = 'Justo é o Senhor em todos os seus caminhos e santo em todas as suas obras. Salmos 145:17'

ver12 = 'Como é feliz aquele cujo auxílio é o Deus de Jacó, cuja esperança está no senhor, no seu Deus. Salmos 146:5'

ver13 = 'Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com a ação de graças, apresentem seus pedidos a Deus. Filipenses 4:6'

ver14 = 'Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que vocês transbordem de esperança, pelo poder do Espírito Santo. Romanos 15:13'

versiculos = [ver1, ver2, ver3, ver4, ver5, ver6, ver7, ver8, ver9, ver10, ver11, ver12, ver13, ver14]

n = Math.random() * (versiculos.length - 0) + 0

n = Math.ceil(n)

document.getElementById("versiculo").innerText = versiculos[n - 1]