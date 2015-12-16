'use strict';

/* Controllers */

angular.module('siteControllers', [])

    .controller('MenuCtrl',['$scope', function($scope){
       $scope.title = "LeGroupage.com";
        $scope.menuList=[
            {
                name: "Contact",
                href: "#contact"
            },
            {
                name: "About",
                href: "#about"
            },

            {
                name: "Portfolio",
                href: "#portfolio"
            }

        ]
    }])
.controller('SiteCtrl', ['$scope',
    function SiteCtrl($scope) {
        $scope.principleList = [
          {
               "_id": 1,
                title: 'Economique',
                introText : 'Vous ne payez plus les retours à vides, et des ouvriers qui sont complètement à votre charge...',
                permalink: 'economique',
              "classValue": 'eur'
        },{
            "_id": 2,
            title: 'Ecologique',
            introText : "Nous utilisons le même voyage pour réaliser plusieurs opérations de transports sur les régions de départ et d'arrivée..",

            permalink: 'ecologique',
                "classValue": 'tree'

    },{
                "_id": 3,
                title: 'Pratique',
                introText : "Vous pouvez opter pour la formule qui vous plait! Vous pouvez tout préparer et ainsi faire d'énormes économies, vous faites votre...",

                permalink: 'pratique',
                "classValue": 'truck'

            },
            {
                "_id": 4,
                title: 'Confortable',
                introText : "Votre satisfaction et le bon déroulement des opérations sont primordiaux...",

                permalink: 'confortable',
                "classValue": 'thumbs-up'
            }
        ];
    }])

.controller('SiteViewCtrl',['$scope', '$routeParams',
        function SiteViewCtrl($scope, $routeParams) {
            var principleId = $routeParams.id;

            $scope.principleHeading = {
                "title" : "Le Groupage de déménagements",
                    "content": "C'est la solution la plus économique, écologique, pratique et confortable pour  déménager. Vous pouvez utiliser cette formule pour diverses raisons et c'est à chaque fois la bonne solution pour déménager pas cher, et dans d'excellentes  conditions ! Il s'agit du même système que le co-voiturage, mais en déménageant.  Pour un déménagement non groupé, en voyage spécial donc, notre confrère vous fera  un devis pour déménager vraiment pas cher sur toute la France demenager-pas-cher.com",
            }
            var principle1 =
            {
                "_id":          "1",
                "title":        "Economique",
                "content":      "Vous ne payez plus les retours à vides, et des ouvriers qui sont complètement à votre charge. Vous réglez uniquement ce que vous consommez!Avec le groupage.com, chaque client participe aux frais et le camion ne revient pas à vide ce qui permet d'occuper les déménageurs au départ et à l'arrivée qui se transforme en un nouveau départ et tout le monde est gagnant : le client paie un déménagement jusqu'à 50% moins cher, des petits transports de petits volumes peuvent se greffer, des semaines plus courtes pour les employés, le camion est exploité à plein régime...C'est économique et écologique.",
                "permalink":    "economique",
                "image_name":   "economique"


            };
            var principle2 =
            {
                "_id":          "2",
                "title":        "Ecologique",

                "content":      "Logique que ce soit écologique, nous utilisons le même voyage pour réaliser plusieurs opérations de transports sur les régions de départ et d'arrivée mais aussi celles que nous traversons. Aujourd'hui, nous sommes tous sensibles aux problèmes de pollution et d'environnement, mais nous ne pouvons pas réaliser de déménagement en vélo ou sur une charrette tirée par des chevaux, par contre, on peut essayer de s'organiser pour polluer moins et en plus c'est pratique. Par exemple, au lieu d'utiliser 4 camions pour 4 clients différents, nous prenons un seul et même camion pour déménager les 4 clients livrés à tour de rôle.",
                "permalink":    "ecologique",
                "image_name":   "ecologique"

            };
            var principle3 =
            {
                "_id":          "3",
                "title":        "Pratique",

                "content":      "Vous pouvez opter pour la formule qui vous plait! Vous pouvez tout préparer et ainsi faire d'énormes économies, vous faites votre déménagement pratiquement seul!Ou vous optez pour la formule intermédiaire on vous fournit les cartons et on se charge du  reste ou prendre une formule complète appelé dans le milieu 'la formule luxe'. Avec un groupage vous n'êtes pas obligé de louer un camion et de conduire 1000 kilomètres pour ramener les affaires de votre enfant de sa chambre d'étudiant. Louer un véhicule avec tous les frais que cela comporte, n'est pas la meilleure solution ! Lorsque vous souhaitez transporter une salle à manger d'un héritage ou lorsque vous dénichez la bonne affaire et qu'il faut prévoir le transport de ces objets: nous sommes là et pouvons prendre en charge vos meubles, même si vous êtes absents.Nous nous chargeons de vos affaires en bon père de famille et notre intérêt c'est que vous soyez ravi de nos prestations afin de diffuser au plus grand nombre les services de notre entreprise, un service très confortable.",
                "permalink":    "pratique",
                "image_name":   "pratique"

            };
            var principle4 =
            {
                "_id":          "4" ,
                "title":        "Confortable",
                "content":      "Nous sommes un réseau d'entreprises artisanales et/ou familiales, au service du particulier et des entreprises depuis plus de 30 ans. Nous aimons ce métier et faisons tout pour le faire correctement. Notre personnel est qualifié, motivé et sélectionné minutieusement : la  confiance doit être totale. La rigueur, l'attention et surtout la précaution sont des qualités indispensables dans notre société. Etre les plus performants et à la pointe de l'élite des sociétés de déménagement est notre première préoccupation.Nous avons tout le matériel nécessaire au bon déroulement de votre déménagement, votre satisfaction et le bon déroulement des opérations sont primordiaux. Des assurances sur mesure selon la valeur de votre mobilier sont proposées de manière à garantir un travail de qualité.",
                "permalink":    "confortable" ,
                "image_name":   "economics"

        };

            if(principleId === '1'){
                $scope.principleEntry = principle1;
            }else if(principleId === '2'){
                $scope.principleEntry = principle2;
            }else if(principleId === '3'){
                $scope.principleEntry = principle3;
            }
            else if(principleId === '4'){
                $scope.principleEntry = principle4;
            }
        }
    ]
)

    .controller('PortfolioViewCtrl', ['$scope',
        function PortfolioViewCtrl($scope) {
            $scope.portfolioList = [

                {
                "portfolio_id" : "portfolioModal1",
                "image_name" : "cabin",
                "heading_name" : "Temoignages"

                },
                 {
                 "portfolio_id" : "portfolioModal2",
                 "image_name" : "cake",
                 "heading_name" : "Temoignages"

                 },
                 {
                 "portfolio_id" : "portfolioModal3",
                 "image_name" : "safe",
                 "heading_name" : "Temoignages"

                 },
                 {
                 "portfolio_id" : "portfolioModal4",
                 "image_name" : "game",
                 "heading_name" : "Temoignages"

                 }

            ];
        }]

);
