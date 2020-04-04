var faker = require('faker');

const gender = () => {
    let num = faker.random.number(2);
    if (num !== 1) {
        return "M"
    } else return "F"
}

const seed = 25;

generateUsers = amount => {
    for (let i = 0; i < amount; i++) {
        let user = `insert into tb_user(
                                        dt_birth, 
                                        ds_cpf,
                                        ds_email, 
                                        ds_first_name, 
                                        ds_gender, 
                                        ds_last_name, 
                                        password, 
                                        ds_phone)
        values(
            "19${faker.random.number(5)+4}${faker.random.number(9)}-${faker.random.number(11)+1}-${faker.random.number(30)+1}", 
            "${faker.random.number(99999999999)}",
            "${faker.internet.email()}",
            "${faker.name.firstName()}",
            "${gender()}",
            "${faker.name.firstName()}", 
            "${faker.random.number(1234)}", 
            "${faker.random.number(11999999999)}");
            `
        console.log(user);
    }
}

generateUsers(125);


generateAddresses = amount => {
    for (let i = 0; i < amount; i++) {
        let address = `insert into tb_address(
            cep,
            ds_city,
            ds_complement,
            ds_district,
            ds_number,
            ds_state,
            ds_street,
            id_user
            )
            values(
    "${faker.random.number(99999999)}",
    "${faker.address.city()}",
    "${faker.lorem.slug()}",
    "${faker.address.county()}",
    "${faker.random.number(99999)}",
    "${faker.address.state()}",
    "${faker.address.streetAddress()}",
    "${faker.random.number(25)+1}"
    );
    `
        console.log(address)
    }
    // gerar usuarios antes : * a qtd de endereços deve ser pelo menos 2x maior que a de usuarios para a seed funcionar
    // SELECT us.id_user ,us.ds_first_name, count(ad.id_address) as 'addresses amount' FROM tb_user us JOIN tb_address ad ON ad.id_user = us.id_user GROUP BY us.id_user; 
}

//generateAddresses(475)

const category = ["Gás Natural", "Gasolina Adtivada", "Diesel", "Etanol Adtivado"];
generateCategories = () => {
    for (let i = 0; i < category.length; i++) {
        let categories = `insert into tb_category(
            ds_name
            )
            values(
    "${category[i]}"
    );
    `
        console.log(categories)
    }
}

//generateCategories();

let products = [
    "https://http2.mlstatic.com/galo-tanque-de-combustivel-20-litros-original-seaflo-D_NQ_NP_841552-MLB31118387857_062019-O.webp",
    "https://http2.mlstatic.com/D_Q_NP_694087-MLB29338393192_022019-AB.webp",
    "https://http2.mlstatic.com/troca-oleo-motor-15w40-sl-semi-sintetico-acdelco-com-filtro-D_NQ_NP_771047-MLB31203118269_062019-W.webp",
    "https://http2.mlstatic.com/5l-oleo-motor-castrol-magnatec-15w40-flex-lubrificante-carro-D_NQ_NP_799005-MLB31363741813_072019-W.webp",
    "https://http2.mlstatic.com/oleo-de-motor-veiculo-toyota-10w30-genuino-toyota-D_NQ_NP_730029-MLB40027070448_122019-W.webp",
    "https://http2.mlstatic.com/oleo-de-carro-semissintetico-15w40-lubrax-1l-D_NQ_NP_631940-MLB31193076564_062019-W.webp",
    "https://http2.mlstatic.com/oleo-motul-carro-8100-x-cess-5w40-100-sintetico-1-litro-D_NQ_NP_800368-MLB31907057542_082019-W.webp",
    "https://http2.mlstatic.com/4-oleo-motor-carro-5w30-mobil-D_NQ_NP_783747-MLB31732628623_082019-W.webp",
    "https://http2.mlstatic.com/kit-de-oleo-5w40-sintetico-atende-veiculos-diesel-gol-golf-mercedes-importado-promocao-sem-juros-brinde-exclusivo-D_NQ_NP_728868-MLB31666033072_082019-W.webp",
    "https://http2.mlstatic.com/galao-4lts-oleo-mobil-super-original-pcarro-api-sl-20w-50-D_NQ_NP_710011-MLB32559105099_102019-W.webp",
    "https://http2.mlstatic.com/aditivos-oleo-lubrificante-militec-D_NQ_NP_832622-MLB40283565401_122019-W.webp",
    "https://http2.mlstatic.com/kit-oleo-motul-carro-8100-x-cess-5w40-4-litros-sintetico-D_NQ_NP_700541-MLB40933676655_022020-W.webp",
    "https://http2.mlstatic.com/motul-c4-400ml-spray-lubrificante-corrente-moto-chain-lube-D_NQ_NP_958840-MLB31421993565_072019-W.webp",
    "https://http2.mlstatic.com/D_NQ_NP_659158-MLB41138771955_032020-W.webp",
    "https://http2.mlstatic.com/oleo-lubrax-feroces-4t-15w-50-sintetico-D_NQ_NP_780785-MLB32814583758_112019-W.webp",
    "https://http2.mlstatic.com/oleo-lubrificante-corrente-bardahl-maxlub-kart-e-moto-D_NQ_NP_785180-MLB26026756597_092017-W.webp",
    "https://http2.mlstatic.com/nanotech-1000-condicionador-de-metais-koube-D_NQ_NP_745984-MLB31092283705_062019-W.webp",
    "https://http2.mlstatic.com/kit-oleo-motul-5100-4t-15w50-4-litros-semissintetico-D_NQ_NP_696501-MLB31123824898_062019-W.webp",
    "https://http2.mlstatic.com/kit-com-3l-motul-motocool-expert-para-radiadores-de-motos-D_NQ_NP_789193-MLB40037363846_122019-W.webp",
    "https://http2.mlstatic.com/oleo-mutul-6100-motor-syn-nergy-5w40-sintetico-1-litro-D_NQ_NP_927728-MLB32817240300_112019-W.webp",
    "https://http2.mlstatic.com/kit-troca-oleo-10w30-new-civic-fit-city-crv-D_NQ_NP_974713-MLB41211089699_032020-W.webp",
    "https://http2.mlstatic.com/fluido-radiador-motul-inugel-expert-37c-1l-azul-hibrido-D_NQ_NP_836650-MLB40521639206_012020-W.webp",
    "https://http2.mlstatic.com/liquido-fuido-motul-inugel-expert-radiador-moto-ou-carro-1lt-D_NQ_NP_812547-MLB32253866556_092019-W.webp",
    "https://http2.mlstatic.com/1uni-motul-dot-5-dot51-dot-5-51-brake-fluid-freio-D_NQ_NP_991016-MLB31085255980_062019-W.webp",
    "https://http2.mlstatic.com/oleo-cmbio-original-peak-atf-cvt-full-synthetic-D_NQ_NP_663346-MLB31532629698_072019-W.webp",
    "https://http2.mlstatic.com/oleo-cambio-cvt-valvoline-nissan-mitsubishi-audi-vw-gm-kia-bmw-mb-honda-ford-subaru-hyundai-suzuki-dodge-jeep-D_NQ_NP_937980-MLB40738703094_022020-W.webp",
    "https://http2.mlstatic.com/castrol-power-1-racing-10w40-oleo-motor-moto-4t-sintetico-1l-D_NQ_NP_802189-MLB40643344023_022020-W.webp",
    "https://http2.mlstatic.com/oleo-motul-4100-turbolight-10w40-galo-4-litros-4l-semissintetico-D_NQ_NP_983167-MLB31925155979_082019-W.webp",
    "https://http2.mlstatic.com/oleo-lubrificante-motul-800-off-road-1-litro-100-sint-D_NQ_NP_646991-MLB31739706388_082019-W.webp",
    "https://http2.mlstatic.com/kit-graxa-03-un-p-corrente-em-geral-motos-300ml-spray-D_NQ_NP_920479-MLB31357279525_072019-W.webp",
    "https://http2.mlstatic.com/4-litros-oleo-castrol-power1-racing-4t-5w40-original-bmw-D_NQ_NP_811613-MLB31095369013_062019-W.webp",
    "https://http2.mlstatic.com/descarbonizante-para-motos-e-barcos-perfect-clean-250ml-D_NQ_NP_889888-MLB31365499603_072019-W.webp",
    "https://http2.mlstatic.com/oleo-valvoline-75w90-synpower-cambio-diferencial-autoblocante-eixo-dianterio-traseiro-D_NQ_NP_957981-MLB41102478331_032020-W.webp",
    "https://http2.mlstatic.com/motul-mc-care-m2-helmet-interior-clean-limpeza-de-capacete-D_NQ_NP_918649-MLB31028370290_062019-W.webp",
    "https://http2.mlstatic.com/oleo-febi-34608-zf-6hp-bmw-320i-x1-x3-x5-a4-a6-landrover-D_NQ_NP_949341-MLB28860885988_122018-W.webp",
    "https://http2.mlstatic.com/oleo-cambio-aut-atf-4-valvoline-mopar-full-sintetico-chrysler-jeep-dodge-grand-cherokee-caravan-pt-cruiser-town-country-D_NQ_NP_973685-MLB40877041739_022020-W.webpautentica",
    "https://http2.mlstatic.com/fluido-oleo-cambio-automatico-atf-dexron-vi-6-mobil-6-litros-D_NQ_NP_686175-MLB32133146810_092019-W.webp",
    "https://http2.mlstatic.com/7-lts-oleo-fluido-cmbio-automatico-atf-t-iv-corolla-0208-D_NQ_NP_748788-MLB31094480428_062019-W.webp",
    "https://http2.mlstatic.com/kit-oleo-lubrificante-atf-diamond-atf-sp-iii-sp3-7-litros-D_NQ_NP_904822-MLB32133263328_092019-W.webp   ",
    "https://http2.mlstatic.com/1-litro-oleo-10w40-repsol-moto-sport-4t-oleo-triumph-bmw-D_NQ_NP_996708-MLB31539551963_072019-W.webp",
    "https://http2.mlstatic.com/oleo-lubrificante-grafitado-corrente-moto-jerod-kit-5-pcs-D_NQ_NP_626934-MLB32159266162_092019-W.webp",
    "https://http2.mlstatic.com/elf-sti-10w40-acea-a3b4-api-sn-rno7100700-D_NQ_NP_653402-MLB31063832894_062019-W.webp",
    "https://http2.mlstatic.com/oleo-motor-honda-10w30-new-civic-fit-city-crv-original-D_NQ_NP_932717-MLB41111477689_032020-W.webp",
    "https://http2.mlstatic.com/fluido-radiador-motul-inugel-optimal-ultra-54c-laranja-1l-D_NQ_NP_661254-MLB32916721814_112019-W.webp",
    "https://http2.mlstatic.com/lubrax-atf-ta-oleo-fluido-direco-hidraulica-1-litro-D_NQ_NP_900491-MLB31093606118_062019-W.webp",
    "https://http2.mlstatic.com/kit-4-litros-oleo-texaco-havoline-0w20-sintetico-D_NQ_NP_635930-MLB31827455594_082019-W.webp",
    "https://http2.mlstatic.com/1l-oleo-de-motor-honda-repsol-moto-10w30-lubrificante-10w-30-D_NQ_NP_986100-MLB32085319880_092019-W.webp",
    "https://http2.mlstatic.com/oleo-castrol-magnatec-5w40-a3b4-orig-vw-bossoniautoparts-D_NQ_NP_627274-MLB31205278483_062019-W.webp",
    "https://http2.mlstatic.com/troca-8-oleo-cmbio-automatico-mercedes-c180-c230-c280-c350-D_NQ_NP_630050-MLB31360067660_072019-W.webp",
    "https://http2.mlstatic.com/oleo-lubrificante-castrol-power1-racing-4t-5w40-2-litros-D_NQ_NP_812089-MLB31136100740_062019-W.webp",
    "https://http2.mlstatic.com/kit-10-oleo-cambio-automatico-valvoline-dexron-vi-6-D_NQ_NP_986383-MLB32893415439_112019-W.webp",
    "https://http2.mlstatic.com/oleo-petronas-sprinta-10w40-sintetico-moto-4t-jaso-ma2-1-l-D_NQ_NP_905094-MLB32165728670_092019-W.webp",
    "https://http2.mlstatic.com/2-litros-motul-800-2t-sintetico-oleo-motor-moto-trilha-D_NQ_NP_991398-MLB27589682873_062018-W.webp",
    "https://http2.mlstatic.com/6-oleo-yamalube-yamaha-mineral-4t-20w50-sae-api-sl-jaso-ma2-D_NQ_NP_635380-MLB31539551582_072019-W.webp",
    "https://http2.mlstatic.com/oleo-motorex-2-tempos-cross-power-motocross-trilha-enduro-D_NQ_NP_887604-MLB40997843622_032020-W.webp",
    "https://http2.mlstatic.com/kit-c-7-oleo-2-tempos-castrol-motores-2t-jaso-fb-500ml-moto-D_NQ_NP_758827-MLB31123950234_062019-W.webp",
    "https://http2.mlstatic.com/oleo-de-motor-elf-evolution-900-ft-5w-40-api-sn-D_NQ_NP_967688-MLB32384853639_102019-W.webpsss",
    "https://http2.mlstatic.com/2x-lubrificante-corrente-graxa-liquida-molysil-moto-spray-D_NQ_NP_628196-MLB40464026015_012020-W.webp",
    "https://http2.mlstatic.com/oleo-motor-motorex-cross-power-10w60-4-tempos-D_NQ_NP_901674-MLB40459620177_012020-W.webp",
    "https://http2.mlstatic.com/oleo-cambio-sintetico-idemitsu-atf-1-litro-3045024871200dd-D_NQ_NP_757190-MLB32901162949_112019-W.webp",
    "https://http2.mlstatic.com/oleo-genuino-honda-4t-sae-10w30-api-sj-semissintetico-1-lt-D_NQ_NP_927991-MLB32093909947_092019-W.webp",
    "https://http2.mlstatic.com/motul-a3-air-filter-oil-filtro-de-ar-D_NQ_NP_844007-MLB31858542389_082019-W.webp",
    "https://http2.mlstatic.com/micro-oleo-wd-40-desingripante-300ml-spray-12-unidades-D_NQ_NP_654367-MLB31075961055_062019-W.webp",
    "https://http2.mlstatic.com/6-oleo-mobil-1-0w40-one-100-sintetico-946ml-D_NQ_NP_885736-MLB31205466966_062019-W.webp",
    "https://http2.mlstatic.com/oleo-lubrificante-moto-anticorrosivo-corrente-hp-spray-300ml-D_NQ_NP_899152-MLB31178741776_062019-W.webp",
    "https://http2.mlstatic.com/fluido-de-freio-motul-rbf-660-500ml-racing-brake-fluid-D_NQ_NP_835379-MLB31185811113_062019-W.webp",
    "https://http2.mlstatic.com/oleo-lubrificante-do-motor-petronas-vs-dual-api-sl-20w50-min-D_NQ_NP_933486-MLB31086779357_062019-W.webp",
    "https://http2.mlstatic.com/fluido-freio-motul-dot-5-dot-51-brake-fluid-500ml-D_NQ_NP_709174-MLB31199360782_062019-W.webp",
    "https://http2.mlstatic.com/oleo-lubrificante-atf-diamond-atf-sp-iii-sp3-1-litro-D_NQ_NP_935177-MLB32133298748_092019-W.webp",
    "https://http2.mlstatic.com/oleo-motor-shell-helix-hx3-20w50-sl-1lt-D_NQ_NP_601096-MLB31968967885_082019-W.webp",
    "https://http2.mlstatic.com/oleo-shell-helix-hx8-0w20-honda-fiat-gm-hyundai-D_NQ_NP_918917-MLB32100028921_092019-W.webp",
    "https://http2.mlstatic.com/fluido-oleo-cambio-automatic-atf-dexron-vi-6-mobil-10-litros-D_NQ_NP_720851-MLB32133142497_092019-W.webp",
    "https://http2.mlstatic.com/dexron-6-mobil-fluido-oleo-cambio-automatico-atf-D_NQ_NP_790966-MLB32133142942_092019-W.webp",
    "https://http2.mlstatic.com/oleo-motor-shell-helix-15w40-hx6-flex-semi-sintetico-D_NQ_NP_848562-MLB32018552869_082019-W.webp",
    "https://http2.mlstatic.com/kit-reparador-pneu-motul-p3-tyre-repair-300ml-c-3-unid-D_NQ_NP_633997-MLB31087123843_062019-W.webp",
    "https://http2.mlstatic.com/oleo-de-motor-total-quartz-ineo-mc3-5w30-sintetico-1lt-D_NQ_NP_805552-MLB27333823611_052018-W.webp",
    "https://http2.mlstatic.com/kit-oleo-motul-4100-power-15w50-semissintetico-3-litros-D_NQ_NP_783582-MLB40718283521_022020-W.webp",
    "https://http2.mlstatic.com/kit-troca-de-oleos-filtro-b-harley-davidson-fat-boy-08-17-D_NQ_NP_881317-MLB31076472617_062019-W.webp",
    "https://http2.mlstatic.com/oleo-motul-6100-flexmax-5w40-1litro-semi-sintetico-D_NQ_NP_685408-MLB31674391734_082019-W.webp",
    "https://http2.mlstatic.com/oleo-fluido-freio-motul-dot-3-e-4-500ml-brake-fluid-D_NQ_NP_662278-MLB40398760431_012020-W.webp",
    "https://http2.mlstatic.com/3-lubrificantes-mobil-super-moto-escova-limpa-corrente-D_NQ_NP_879750-MLB32581966699_102019-W.webp",
    "https://http2.mlstatic.com/oleo-motor-5w40-valvoline-sint-dexos2-api-vw-bmw-mb-fiat-D_NQ_NP_940684-MLB32702258951_102019-W.webp",
    "https://http2.mlstatic.com/4-oleo-castrol-magnatec-5w40-filtro-oleo-gol-fox-502-00-D_NQ_NP_663999-MLB31205945156_062019-W.webp",
    "https://http2.mlstatic.com/oleo-de-cambio-motul-75w140-gear-competition-1-litro-D_NQ_NP_817916-MLB31767379632_082019-W.webp",
    "https://http2.mlstatic.com/kit-oleo-motul-6100-syn-nergy-5w40-semisint-6-litros-D_NQ_NP_646614-MLB40933669946_022020-W.webp",
    "https://http2.mlstatic.com/combo-filtro-e-oleo-yamalube-4t-20w50-landerfazertenere250-D_NQ_NP_666765-MLB31034669115_062019-W.webp",
    "https://http2.mlstatic.com/oleo-mobil-lubrificante-de-motor-4t-20w50-1-litro-D_NQ_NP_623543-MLB31187054462_062019-W.webp",
    "https://http2.mlstatic.com/4-litros-oleo-mobil-10w40-mx-mobil-super-moto-power-D_NQ_NP_993853-MLB31090216115_062019-W.webp",
    "https://http2.mlstatic.com/castrol-edge-0w30-a3-sn-longlife-volkswagen-bmw-D_NQ_NP_887930-MLB32633984958_102019-W.webp"
]

generateProducts = () => {
    for (let i = 0; i < products.length; i++) {
        let product = `insert into tb_product(
            ds_description,
            ds_image,
            ds_name,
            vl_price,
            nr_quant_stock,
            id_category
            )
            values(
    "${faker.lorem.lines()}",
    "${products[i]}",
    "${faker.commerce.productName()}",
    ${faker.random.number(999)}.${faker.random.number(99)},
    ${faker.random.number(999)},
    ${faker.random.number(category.length-1)+1}
    );
    `
        console.log(product)
        // select cat.id_category as idcat, cat.ds_name as name, count(prod.id_product) as qtd_prods from tb_category cat join tb_product prod on cat.id_category = prod.id_category group by idcat ;   
    }
}

//generateProducts()

const generateOrders = amount => {
    for (let i = 0; i < amount; i++) {
        
        let order = `insert into tb_order(
            dt_order,
            ds_total_price,
            id_address,
            id_user,
            order_itens
            )
            values(
                "1995-12-02T16:07:59.192Z", 
                ${faker.random.number(9999)}.${faker.random.number(99)},
                ${faker.random.number(75)},
                ${faker.random.number(seed)}
    );
    `
        console.log(order)
    }
}

//generateOrders(products.length);

generateOrderItens = () => {

    for (let i = 0; i < products.length; i++) {
        let order_item = `insert into tb_order_item(
        vl_price,
        nr_quantity,
        id_product,
        id_order_itens
        )
        values(
            ${faker.random.number(999)}.${faker.random.number(99)},
            ${faker.random.number(99)},
            ${faker.random.number(products.length)},
            ${faker.random.number(99)}
);
`
        console.log(order_item)
    }
}