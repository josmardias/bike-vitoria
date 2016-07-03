


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<!-- <html lang="pt-br">-->
<head id="Head1"><meta charset="Content-Type: text/html; charset=UTF-8" /><title>
	Mapa das Estacao
</title>
    <!-- Description, Keywords and Author -->
    <meta name="description" content="Bike Vitória é um projeto de Compartilhamento de Bicicletas em parceira entre a Prefeitura de Vitória, a UNIMED e as empresas Samba/Serttel e Mobilicidade. " /><meta name="keywords" content="Mobilicidade, Bicicletas, Compartilhamento, Samba, Serttel, Sustentabilidade, Mobilidade Urbana, Vitória, Bikes, pedalar, saúde." /><meta name="author" content="Mobilicidade" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <!-- Styles -->
    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <!-- Animate CSS -->
    <link href="css/animate.min.css" rel="stylesheet" />
    <!-- Slider Revolution CSS -->
    <link href="css/settings.css" rel="stylesheet" />
    <!--[if IE ]>
      <link rel="stylesheet" href="css/settings-ie8.css" />
      <![endif]-->
    <!-- Countdown CSS -->
    <link href="css/jquery.countdown.css" rel="stylesheet" />
    <!-- Portfolio CSS -->
    <link href="css/prettyPhoto.css" rel="stylesheet" />
    <!-- Font awesome CSS -->
    <link href="css/font-awesome.min.4.6.3.css" rel="stylesheet" />
    <!-- Custom CSS -->
    <link href="css/style.css" rel="stylesheet" />
    <!--[if IE]>
      <link rel="stylesheet" href="css/ie-style.css" />
      <![endif]-->
    <!-- Color Style sheet -  [ blue, green, light blue, orange, purple, red, violet ] -->
    <link id="theme" type="text/css" rel="stylesheet" href="css/green.css" />
    <!-- Favicon -->
    <link rel="shortcut icon" href="#" /><link rel="stylesheet" href="https://code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css" />

    <!-- Script para atualizar o browser se o usuário tiver utilizando navegadores antigos -->
    <script type="text/javascript">
        var $buoop = {};
        $buoop.ol = window.onload;
        window.onload = function () {
            try { if ($buoop.ol) $buoop.ol(); } catch (e) { }
            var e = document.createElement("script");
            e.setAttribute("type", "text/javascript");
            e.setAttribute("src", "//browser-update.org/update.js");
            document.body.appendChild(e);
        }
    </script>
    <script type="text/javascript">
        $(document).ready(function () {

            var maskHeight = $(document).height();
            var maskWidth = $(window).width();

            $('#mask').css({ 'width': maskWidth, 'height': maskHeight });

            $('#mask').fadeIn(1000);
            $('#mask').fadeTo("slow", 0.8);

            //Get the window height and width
            var winH = $(window).height();
            var winW = $(window).width();

            $('#dialog2').css('top', winH / 2 - $('#dialog2').height() / 2);
            $('#dialog2').css('left', winW / 2 - $('#dialog2').width() / 2);

            $('#dialog2').fadeIn(2000);

            $('.window .close').click(function (e) {
                e.preventDefault();

                $('#mask').hide();
                $('.window').hide();
            });

            $('#mask').click(function () {
                $(this).hide();
                $('.window').hide();
            });

        });
    </script>
    <style type="text/css">
    #mask {
      position:absolute;
      left:0;
      top:0;

      z-index:9000;
      background-color:transparent;
      display:none;
    }

    #boxes .window {
      position:absolute;
      left:0;
      top:0;
      width:440px;
      height:200px;
      display:none;
      z-index:9999;
      padding:20px;
    }

    #boxes #dialog2 {
      background:transparent;
      width:650px;
      margin:0 ;
      margin-left: -250px;
      margin-top:-180px;
    }
    </style>
</head>
<body>
    <script src="js/mobccustom.js" charset="ISO-8859-1"></script>
    <form method="post" action="./mapaestacao.aspx" id="FormMaster">
<div class="aspNetHidden">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwULLTE1MjQ5ODA0NjkPZBYCZg9kFgICAw9kFgQCAw8WAh4EVGV4dAUkPGEgaHJlZj0nY2FkYXN0cm8uYXNweCc+Q0FEQVNUUk88L2E+ZAIFDxYCHwAFHjxhIGhyZWY9J2xvZ2luLmFzcHgnPkxPR0lOPC9hPmRkbuoLbJfMZeQm6kV56xCy2delQzV3OctvPEr5D+YYTTg=" />
</div>


<script type="text/javascript">
//<![CDATA[
var beaches = [['Escola da Vida - São Pedro',-20.283892,-40.332824,'Rodovia Serafim Derenzi, 4555, próximo a Escola da Vida / Esquina Rua Quatro de Janeiro','','A','EO','10','10','2','Est_Normal 1','img/estacaook.png',1],['Grande Vitória',-20.293644,-40.343526,'Rodovia Serafim Derenzi, 2400 (Igreja de Jesus Cristo) / Esquina Rua Sargento José Homero Dias (Rua Capitão Fabiano)','','A','EO','4','4','8','Est_Normal 1','img/estacaook.png',2],['Inhanguetá',-20.298717,-40.346238,'Rua Aires Vieira do Nascimento, em frente ao Campo de futebol de areia / Esquina com a Rodovia Serafim Derenzi,1641','','A','EO','3','3','9','Est_Normal 1','img/estacaook.png',3],['Santo Antônio - Prainha',-20.311602,-40.356076,'Avenida Santo Antônio, na Praça da Bandeira / Entre a Rua Alvimar Silva e a Rua Dom João Neri','','A','EO','7','7','7','Est_Normal 1','img/estacaook.png',4],['Tancredão',-20.320093,-40.353174,'Avenida Dário Lourenço de Souza, em frente ao Centro Esportivo Tancredo de Almeida Neves / Esquina Rua Rosilda Falcão dos Anjos (acesso a 2ª Ponte)','','A','EO','2','2','10','Est_Normal 1','img/estacaook.png',5],['Parque Moscoso',-20.319918,-40.342789,'Rua Vinte e Três de Maio, lateral do Parque Moscoso / Esquina Avenida Cleto Nunes','','A','EO','1','1','11','Est_Normal 1','img/estacaook.png',6],['Cais do Porto',-20.321893,-40.335989,'Avenida Marechal Mascarenhas de Moraes, em frente ao Antigo Cais das Barcas, oposto a Praça Francisco Teixeira da Cruz / Esquina Avenida Princesa Isabel','','A','EO','2','2','10','Est_Normal 1','img/estacaook.png',7],['Praca Getúlio Vargas',-20.320852,-40.330489,'R. Dr. Aristídes Campos, 56 -','Av. Mal. Mascarenhas de Moraes','A','EO','1','1','11','Est_Normal 1','img/estacaook.png',8],['SOE Beira Mar',-20.318521,-40.321594,'Avenida Mascarenhas de Moraes, oposto a Faculdade Católica Salesiana, próximo ao módulo SOE Beira Mar / Esquina Rua Desembargador José Vicente','','A','EO','1','1','11','Est_Normal 1','img/estacaook.png',9],['Prefeitura Municipal de Vitória',-20.317976,-40.309655,'Avenida Jouberto de Barros, lateral da Prefeitura Municipal de Vitória / Esquina Avenida Marechal Mascarenhas de Moraes','','A','EO','8','8','4','Est_Normal 1','img/estacaook.png',10],['Praça do Papa',-20.316604,-40.298205,'Rua Belmiro Rodrigues da Silva, no acesso ao estacionamento da Praça do Papa / Próximo a Marinha do Brasil e ao Horto Mercado','','A','EO','3','3','9','Est_Normal 1','img/estacaook.png',11],['Praça dos Desejos',-20.303819,-40.291623,'Avenida Saturnino de Brito, na Praça dos Desejos, próximo a baia de estacionamento / Esquina Avenida Desembargador Alfredo Cabral','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',12],['Praça dos Namorados',-20.301136,-40.291422,'Avenida Saturnino de Brito, na Praça dos Namorados, próximo a baia de estacionamento / Esquina Rua Moacir Avidos','','A','EO','2','2','10','Est_Normal 1','img/estacaook.png',13],['UNIMED - Ponte de Camburi',-20.292566,-40.289228,'Avenida Dante Michelini, junto ao acesso a Estátua de Iemanjá (acesso a ponte), próximo ao Edifício UNIMED / Esquina Avenida Saturnino Rangel de Mauro','','A','EO','3','3','9','Est_Normal 1','img/estacaook.png',14],['Campus UFES',-20.279480,-40.301016,'Rua Darcy Grijó, em frente ao Auto Posto Presidente (BR) / Esquina Avenida Anísio Fernandes Coelho','','A','EO','1','1','11','Est_Normal 1','img/estacaook.png',15],['SOE Camburi',-20.287300,-40.290770,'Avenida Dante Michelini, próximo ao módulo SOE Camburi / Esquina Rua Eugenílio Ramos','','A','EO','6','6','6','Est_Normal 1','img/estacaook.png',16],['SICOOB - Praia de Camburi',-20.282991,-40.289351,'Avenida Dante Michelini, oposto ao edifício do SICOOB / Esquina Rua Comissário Otávio de Queirós','','A','EO','12','12','0','Est_Cheia 0','img/estacaovazia.png',17],['Baia de Skate - Praia de Camburi',-20.272822,-40.278998,'Avenida Dante Michelini, próximo a baia de skate / Esquina Avenida Adalberto Simão Nader','','A','EO','3','3','9','Est_Normal 1','img/estacaook.png',18],['SOE Jardim Camburi',-20.266777,-40.269178,'Avenida Dante Michelini, 4355 (Bristol Diamond Suites), próximo ao módulo SOE Jardim Camburi / Esquina Rua Carlos Martins','','A','EO','6','6','6','Est_Normal 1','img/estacaook.png',19],['Parque Zé da Bola',-20.264926,-40.263272,'Avenida Dante Michelini, no acesso ao viaduto / Esquina Rua José Celso Cláudio','','A','EO','9','9','3','Est_Normal 1','img/estacaook.png',20],];//]]>
</script>

<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="028E2840" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEdAAP0YleJdVkEcpwLwJRLV6ghFW/AqYJv/OAt2htb54RNPZD/4pn3X/KwjawlVPV25JEWc140iDE8aUjEM++qh3SZKPedZNgtzyE2Urg3fWewUQ==" />
</div>
    <div class="page">
        <!-- ínicio do cabeçalho -->
        <div class="header">
            <!-- Navigation Bar -->
            <nav class="navbar navbar-default" role="navigation">

               <div class="container">

                  <!-- Brand and toggle get grouped for better mobile display -->
                  <div class="navbar-header">
                     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                     <span class="sr-only">Toggle navigation</span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     </button>
							<!--Logos Projeto e patrocinado -->
							<div  class="logo-Bicicletar" style="width:510px;">
							<a href="home.aspx"><img src="./img/bike.png" alt="bike vitoria - Bicicletas Compartilhadas"style="position:relative;left: 24px;"></a>
							<a href="https://www.unimedvitoria.com.br" target="_blank"><img src="./img/logo_unimed.png" alt="Net" style="position:relative; left:54px;" class="logo-Bicicletar"></a>
                            <a href="http://www.sicoobes.com.br" target="_blank"><img src="./img/sicoob.png" alt="Net" style="position:relative; left:73px;" class="logo-Bicicletar"></a>
							<a href="http://www.vitoria.es.gov.br" target="_blank"><img src="./img/prefeitura.png" alt="Bike Vitória - Bicicletas Compartilhadas" style="float:right; position:relative;"></a></div>
                            <!-- Fim Logos Projeto e patrocinado -->
                  </div>
                  <!-- Menu -->
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                     <ul class="nav navbar-nav navbar-right">
                        <li><a href="home.aspx">Home</a></li>
                        <li class="dropdown">
                           <a class="dropdown-toggle" data-toggle="dropdown" href="#">Passe <span class="fa fa-angle-down"></span></a>
                           <ul class="dropdown-menu" role="menu" style="min-width: 215px;">


                              <li><a href="https://www.mobilicidade.com.br/bikevitoria/comprarpasses.aspx">Adquirir Passe</a></li>
                              <li><a href="associar-cartao.aspx">Associar Cartão de Transporte</a></li>

                              <!--li><a href="AtualizarCartaoPasse.aspx">Atualizar Cartão de Transporte</a></li-->
                              <!--li><a href="cancelarpasse.aspx">Cancelar Cartão de Transporte</a></li-->


                           </ul>
                        </li>
                        <li class="dropdown">
                           <a class="dropdown-toggle" data-toggle="dropdown" href="#">Extrato <span class="fa fa-angle-down"></span></a>
                           <ul class="dropdown-menu" role="menu">
                              <li><a href="historicocompras.aspx">Histórico de passes</a></li>
                              <li><a href="minhamovimentacao.aspx">Histórico de Movimentação</a></li>
                           </ul>
                        </li>
                        <li class="dropdown">
                           <a class="dropdown-toggle" data-toggle="dropdown" href="#">Informações <span class="fa fa-angle-down"></span></a>
                           <ul class="dropdown-menu" role="menu">
                              <li><a href="sobre.aspx">Sobre o Projeto</a></li>
                              <li><a href="comoutilizar.aspx">Como Utilizar</a></li>
                              <li><a href="duvidas.aspx">Dúvidas</a></li>
                              <li><a href="mapaestacao.aspx">Estações</a></li>
                              <li><a href="http://www.bikevitoria.com/bikevitoriatermo.pdf">Termo de Uso e Adesão</a></li>
                              <li><a href="contato.aspx">Fale Conosco</a></li>
                           </ul>
                        </li>
                        <li><a href='cadastro.aspx'>CADASTRO</a></li>
                        <!-- <li><a href="cadastro.aspx">Cadastro</a></li> -->
                        <li><a href='login.aspx'>LOGIN</a></li>
                     </ul>
                  </div>
                  <!-- /.navbar-collapse -->
               </div>
            </nav>
        </div>
        <!-- Início Painel do Login -->
        <div class="modal fade" id="painelSessao" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            &times;</button>
                        <h4 class="modal-title">
                            Olá, Você está conectado como:</h4>
                    </div>
                    <div class="modal-body">
                        <!-- CAIXA DE AVISO -->
                        <span id="caixaAvisoRecuperarSenha"></span>
                        <!-- Items table -->
                        <table class="table table-striped">
                            <thead>
                                <tr align="center">
                                    <th colspan="3">
                                        <span id="txtNomeUsuarioLogado"></span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Email
                                    </td>
                                    <td colspan="2">
                                        <span id="txtCelularUsuarioLogado"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Celular:
                                    </td>
                                    <td colspan="2">
                                        <span id="txtEmailUsuarioLogado"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <input type="submit" name="ctl00$btnSessao" value="Editar Conta" id="btnSessao" class="btn btn-info" style="color:White;" />
                        <input type="submit" name="ctl00$btnSair" value="Sair" id="btnSair" class="btn btn-info" style="color:White;" />
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
        <!-- Fim Painel do Login -->
        <!--Fim cabeçalho -->
        <!-- Início da Home Principal-->
        <div class="main">

    <style>
        html, body, #map-canvas
        {
            height: 100%;
            margin: 0px;
            padding: 0px;
        }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    <script type="text/javascript">

        function initialize() {

            var mapOptions = { zoom: 14, center: new google.maps.LatLng(-20.297477, -40.296032) };
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            setMarkers(map, beaches);
        };

        function setMarkers(map, locations) {
            var shape = {
                coord: [1, 1, 1, 40, 50, 40, 50, 1], // Área do Clique no ícnoe
                type: 'poly'
            };

            // Iniciando o Balão
            var infowindow = new google.maps.InfoWindow();
            for (var i = 0; i < locations.length; i++) {

                var beach = locations[i];

                // Montando os parametros da imagem
                var image = {
                    url: beach[11],
                    size: new google.maps.Size(50, 50), // Tamanho do ícone
                    origin: new google.maps.Point(0, 0), // Origem do ponto inicial
                    anchor: new google.maps.Point(0, 50) // 0 até tamanho da imagem
                };

                // Definindo coordenadas
                var myLatLng = new google.maps.LatLng(beach[1], beach[2]);

                // Carregando o html
                var varTableHTML;
                varTableHTML = "<table><tr>";
                varTableHTML += "<td align='left' valign='middle' width='30'><img src='" + beach[11] + "' /></td>";
                varTableHTML += "<td align='left'><font face='arial' size='1'><b><br/>" + beach[12] + ". " + beach[0] + "</b><br/><br/></font></td>";
                varTableHTML += "</tr>";
                varTableHTML += "<tr align='left'>"
                varTableHTML += "<td colspan='2'><font face='arial' size='1'><b>Endereco:</b> " + beach[3] + "</font></td>";
                varTableHTML += "</tr>";
                varTableHTML += "<tr align='left'>"
                varTableHTML += "<td colspan='2'><font face='arial' size='1'><b>Bicicletas disponíveis:</b> " + beach[8] + "</font></td>";
                varTableHTML += "</tr>";
                varTableHTML += "<tr align='left'>"
                varTableHTML += "<td colspan='2'><font face='arial' size='1'><b>Vagas livres:</b> " + (beach[9]) + "</font></td>";
                varTableHTML += "</tr></table><br/><br/>";

                // Definindo o marker
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    icon: image,
                    shape: shape,
                    title: beach[0],
                    zIndex: beach[12],
                    content: varTableHTML
                });

                addList(marker)
            }

            // Guardando o marker
            function addList(marker) {
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent(marker.content)
                    infowindow.open(map, marker);
                });
            }
        }

        // inicializando os pontos no mapa
        google.maps.event.addDomListener(window, 'load', initialize);

    </script>
    <!-- Inicio do Mapa -->
    <div class="inner-page">
        <div class="contact padd" style="padding-top: 30px; padding-bottom: 20px">
            <div class="container">
                <div class="heading">
                    <!-- Heading -->
                    <h2>
                        Mapa das Estações</h2>
                    <!-- Sub Heading -->
                    <hr />
                    <h3>
                        Legenda:</h3>
                    <div class="col-md-4">
                        <p style="text-align: left;">
                            <img src="./img/ico_operacao.png" />
                            Em Operação
                        </p>
                        <p style="text-align: left;">
                            <img src="./img/ico_off.png" />
                            Em Implantação ou Em Manutenção</p>
                    </div>
                    <div class="col-md-4">
                        <p style="text-align: left;">
                            <img src="./img/ico_cheia.png" />
                            Todas as vagas ocupadas
                        </p>
                        <p style="text-align: left;">
                            <img src="./img/ico_sem_bike.png" />
                            Nenhuma Bicicleta disponível
                        </p>
                    </div>
                    <div class="col-md-4">
                        <p style="text-align: left;">
                            <img src="./img/ico_inativo.png" />
                            OffLine</p>
                    </div>
                </div>
            </div>
            <!-- CAIXA DE AVISO -->
            <span id="MainContent_caixaAlerta"></span>
            <!-- Map -->
            <div class="contact-map">
                <!-- Map Frame -->
                <div id="map-canvas">
                </div>
            </div>
        </div>
        <!-- Fim do Mapa -->
    </div>
    <!-- Início do Content de Patrocinadores -->
    <div class="container">
        <hr>
        <div class="contact-item heading">
            <!-- Paragraph -->

         <a href="http://www.vitoria.es.gov.br" target="_blank"><img src="./img/prefeitura.png" style="margin-right:5%;"></a>
         <img src="./img/logo-samba.png" style="margin-right:5%;">
         <a href="http://www.mobilicidade.com.br/" target="_blank"><img src="./img/logo-mobilicidade.png"></a>
        </div>
    </div>
    <!-- Fim do Content de Patrocinadores -->
    <script>
        (function (i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-77689704-1', 'auto');
        ga('send', 'pageview');
    </script>

        </div>
        <!-- Fim da Home Principal-->
        <div class="clear">
        </div>
    </div>
    <!-- Fim da Home Principal-->
    <!-- Footer Start -->
    <div class="footer">
        <div class="container">
            <!-- Social Media -->
            <div class="social">
                <a href="https://www.facebook.com/SambaTransportesSustentaveis" target="_blank" class="facebook"><i
                    class="fa fa-facebook"></i></a><a href="http://instagram.com/SambaTransportesSustentaveis" target="_blank"
                        class="twitter"><i class="fa fa-instagram"></i></a>
            </div>
            <!-- Copy right -->
            <div class="copy-right">
                <p>
                    &copy; Copyright 2016 <a href="#">Bike Vitória</a></p>
            </div>
        </div>
    </div>
    <!-- Footer End -->
    <!-- Volta para o topo -->
    <span class="scroll-to-top"><a href="#"><i class="fa fa-chevron-up"></i></a></span>
    <!-- Scroll to top -->
    <span class="scroll-to-top"><a href="#"><i class="fa fa-chevron-up"></i></a></span>
    </div>
    <!-- Javascript files -->
    <!-- INÍCIO DO CALENDÁRIO-->
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="https://code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
    <script>
        var $a = jQuery.noConflict();
        $a(function () {
            $a("#MainContent_txtDataInicial").datepicker({
                defaultDate: "-4w",
                changeMonth: true,
                numberOfMonths: 2,
                onClose: function (selectedDate) {
                    $a("#MainContent_txtDataFinal").datepicker("option", "minDate", selectedDate);
                }
            });

            $a("#MainContent_txtDataFinal").datepicker({
                defaultDate: "",
                changeMonth: true,
                numberOfMonths: 1,
                onClose: function (selectedDate) {
                    $a("#MainContent_txtDataInicial").datepicker("option", "maxDate", selectedDate);
                }
            });
            $a('#MainContent_txtDataInicial').datepicker("option", 'dateFormat', 'dd/mm/yy');
            $a('#MainContent_txtDataFinal').datepicker("option", 'dateFormat', 'dd/mm/yy');
        });
    </script>
    <!-- FIM DO CALENDÁRIO -->
    <!-- jQuery -->
    <script src="js/jquery.js"></script>
    <!-- Bootstrap JS -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Jquery for Countdown  -->
    <script type="text/javascript" src="js/jquery.countdown.min.js"></script>
    <!-- jQuery prettyPhoto & Isotope -->
    <script src="js/jquery.prettyPhoto.js"></script>
    <script src="js/isotope.js"></script>
    <!-- Masonry JS -->
    <script src="js/masonry.pkgd.min.js"></script>
    <!-- SLIDER REVOLUTION 4.x SCRIPTS  -->
    <script type="text/javascript" src="js/jquery.themepunch.plugins.min.js"></script>
    <script type="text/javascript" src="js/jquery.themepunch.revolution.min.js"></script>

    <!-- Style Switcher JS -->
    <script type="text/javascript" src="js/jquery.style-switcher.js"></script>
    <!-- Knob JS -->
    <script src="js/jquery.knob.js"></script>
    <!-- Parallax JS -->
    <script src="js/jquery.parallax-1.1.3.js"></script>
    <!-- Count To JS  -->
    <script src="js/jquery.countTo.js"></script>
    <!-- WayPoints JS -->
    <script src="js/waypoints.min.js"></script>
    <!-- GMap JS -->

    <!--<script type="text/javascript" src="js/jquery.ui.map.overlays.min.js"></script>-->
    <!-- Respond JS for IE8 -->
    <script src="js/respond.min.js"></script>
    <!-- HTML5 Support for IE -->
    <script src="js/html5shiv.js"></script>
    <!-- This Page Java Script -->
    <script type="text/javascript">

        /* ******************************************** */
        /*  JS for Revolution slider  */
        /* ******************************************** */

        var slider;

        jQuery(document).ready(function () {

            slider = jQuery('.banner').revolution(
         {
             delay: 8000,
             startwidth: 1170,
             startheight: 550,

             hideThumbs: 10,

             navigationType: "none",


             hideArrowsOnMobile: "on",

             touchenabled: "on",
             onHoverStop: "on",

             navOffsetHorizontal: 0,
             navOffsetVertical: 20,

             stopAtSlide: -1,
             stopAfterLoops: -1,

             shadow: 0,

             fullWidth: "on",
             fullScreen: "off"
         });

        });
    </script>


    <!-- Custom JS -->
    <script src="js/custom.js"></script>
    </form>
</body>
</html>
