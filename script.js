// 1. 20종 식물몬 전체 데이터베이스 (7가지 질문 조건 완벽 매칭 및 도감 넘버링)
const plantsDB = [
    {
        name: "인도고무나무", subtitle: "No.001 [땅/풀 타입]", type: "땅 / 풀",
        skill: "미세먼지 흡착 (공기 정화)", tags: ["#공기정화", "#듬직함", "#거실추천"],
        description: "넓고 두꺼운 잎으로 공기 중의 미세먼지를 싹 흡수하는 듬직한 반려식물입니다.",
        spot: "거실 창가, 베란다", caution: "잎에 먼지가 쌓이면 호흡이 어려우니 가끔 젖은 수건으로 닦아주세요.",
        image: "images/plant-1.png",
        scoreMatch: { sunlight: "medium", airQuality: "high", space: "large", location: "urban", pollution: "high", careType: "easy", mood: "interior" }
    },
    {
        name: "틸란드시아", subtitle: "No.002 [바람/풀 타입]", type: "바람 / 풀",
        skill: "공중 습도 조절", tags: ["#먼지먹는식물", "#에어플랜트", "#행잉식물"],
        description: "흙 없이도 공기 중의 수분과 먼지를 먹고 자라는 자유로운 영혼의 식물몬입니다.",
        spot: "창가, 벽면, 책상 위", caution: "일주일에 1~2회 물에 10분 정도 푹 담갔다가 잘 말려주세요.",
        image: "images/plant-2.png",
        scoreMatch: { sunlight: "medium", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "스킨답서스", subtitle: "No.003 [풀/독 타입]", type: "풀 / 독",
        skill: "일산화탄소 제거", tags: ["#생명력갑", "#주방식물", "#수경재배"],
        description: "어디서든 끈질기게 살아남으며 주방의 일산화탄소를 맑게 정화해 줍니다.",
        spot: "주방 가스레인지 주변, 어두운 실내", caution: "너무 길게 자라면 줄기를 잘라 물병에 꽂아보세요. 금방 뿌리를 내립니다.",
        image: "images/plant-3.png",
        scoreMatch: { sunlight: "low", airQuality: "high", space: "small", location: "urban", pollution: "high", careType: "easy", mood: "healing" }
    },
    {
        name: "아레카 야자", subtitle: "No.004 [물/바람 타입]", type: "물 / 바람",
        skill: "천연 가습", tags: ["#천연가습기", "#휴양지감성", "#NASA1위"],
        description: "실내를 트로피컬 휴양지처럼 만들어주며 하루에 엄청난 양의 수분을 내뿜습니다.",
        spot: "거실 소파 옆, 넓은 실내", caution: "잎 끝이 마르기 쉬우니 주변에 분무기로 물을 자주 뿌려주세요.",
        image: "images/plant-4.png",
        scoreMatch: { sunlight: "high", airQuality: "high", space: "large", location: "urban", pollution: "high", careType: "diligent", mood: "healing" }
    },
    {
        name: "몬스테라", subtitle: "No.005 [풀/어둠 타입]", type: "풀 / 어둠",
        skill: "광합성 폭발", tags: ["#플랜테리어", "#찢어진잎", "#순둥이"],
        description: "이국적인 찢어진 잎이 매력적이며 초보자도 쉽게 키울 수 있는 대세 식물입니다.",
        spot: "거실 창가, 통풍이 잘 되는 곳", caution: "직사광선보다는 은은한 간접광을 좋아합니다.",
        image: "images/plant-5.png",
        scoreMatch: { sunlight: "medium", airQuality: "normal", space: "large", location: "residential", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "산세베리아", subtitle: "No.006 [땅/독 타입]", type: "땅 / 독",
        skill: "야간 산소 방출", tags: ["#음이온", "#침실식물", "#방치형"],
        description: "밤에 이산화탄소를 흡수하고 산소를 내뿜어 여러분의 숙면을 지켜줍니다.",
        spot: "침실 머리맡, 협탁 위", caution: "물을 너무 많이 주면 뿌리가 썩으니 한 달에 한 번만 주세요.",
        image: "images/plant-6.png",
        scoreMatch: { sunlight: "low", airQuality: "high", space: "small", location: "urban", pollution: "low", careType: "easy", mood: "healing" }
    },
    {
        name: "파키라", subtitle: "No.007 [풀/땅 타입]", type: "풀 / 땅",
        skill: "이산화탄소 포집", tags: ["#금전운", "#머니트리", "#개업선물"],
        description: "땋은 듯한 굵은 목대와 야자수 같은 잎이 이국적이며 금전운을 부른다고 알려져 있습니다.",
        spot: "거실 코너, 서재", caution: "몸통에 물을 저장하므로 흙이 완전히 말랐을 때 물을 주세요.",
        image: "images/plant-7.png",
        scoreMatch: { sunlight: "low", airQuality: "high", space: "large", location: "urban", pollution: "high", careType: "easy", mood: "interior" }
    },
    {
        name: "스파티필름", subtitle: "No.008 [물/풀 타입]", type: "물 / 풀",
        skill: "유해물질 강력 흡수", tags: ["#하얀꽃", "#공기정화", "#알림요정"],
        description: "우아한 하얀 꽃을 피우며, 물이 고플 땐 잎을 축 늘어뜨려 신호를 보내는 똑똑한 식물입니다.",
        spot: "화장실 입구, 주방", caution: "잎이 처지면 물이 필요하다는 뜻이니 바로 흠뻑 주세요.",
        image: "images/plant-8.png",
        scoreMatch: { sunlight: "low", airQuality: "high", space: "small", location: "urban", pollution: "high", careType: "diligent", mood: "healing" }
    },
    {
        name: "유칼립투스", subtitle: "No.009 [바람/풀 타입]", type: "바람 / 풀",
        skill: "비염 완화 아로마", tags: ["#비염추천", "#허브", "#상쾌한향"],
        description: "동글동글한 은빛 잎에서 나는 상쾌한 향기가 코를 뻥 뚫어주고 기분을 맑게 합니다.",
        spot: "바람이 잘 통하는 창가", caution: "햇빛과 바람을 매우 좋아하므로 환기가 부족하면 금방 시듭니다.",
        image: "images/plant-9.png",
        scoreMatch: { sunlight: "high", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "diligent", mood: "healing" }
    },
    {
        name: "스투키", subtitle: "No.010 [땅/불 타입]", type: "땅 / 불",
        skill: "전자파 차단", tags: ["#전자파차단", "#사무실식물", "#다육식물"],
        description: "오동통하고 곧게 뻗은 모양이 귀여우며, 관리가 거의 필요 없는 진정한 방치형 식물입니다.",
        spot: "컴퓨터 모니터 옆, TV 선반", caution: "물을 자주 주면 물러서 죽을 수 있으니 한두 달에 한 번만 조금 주세요.",
        image: "images/plant-10.png",
        scoreMatch: { sunlight: "medium", airQuality: "normal", space: "small", location: "urban", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "여인초", subtitle: "No.011 [풀/빛 타입]", type: "풀 / 빛",
        skill: "수분 발산", tags: ["#대형식물", "#카페감성", "#인테리어"],
        description: "부채처럼 크고 시원하게 뻗은 잎이 공간을 압도하며 트로피컬한 무드를 연출합니다.",
        spot: "넓은 거실, 사무실 로비", caution: "잎이 바람이나 충격에 의해 갈라질 수 있으나 자연스러운 현상입니다.",
        image: "images/plant-11.png",
        scoreMatch: { sunlight: "high", airQuality: "normal", space: "large", location: "residential", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "금전수", subtitle: "No.012 [땅/번개 타입]", type: "땅 / 번개",
        skill: "재물운 버프", tags: ["#돈나무", "#집들이선물", "#강인함"],
        description: "동전을 꿰어놓은 듯한 반짝이는 잎사귀가 특징이며 집안에 부를 가져다준다는 속설이 있습니다.",
        spot: "거실 입구, 현관 근처", caution: "알뿌리에 수분을 가득 머금고 있어 과습에 매우 취약합니다.",
        image: "images/plant-12.png",
        scoreMatch: { sunlight: "low", airQuality: "normal", space: "large", location: "urban", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "테이블야자", subtitle: "No.013 [풀/물 타입]", type: "풀 / 물",
        skill: "초소형 공기정화", tags: ["#책상식물", "#반음지", "#순둥이"],
        description: "작고 아담한 크기로 책상이나 테이블 위에 올려두기 좋으며 화학물질 흡수 능력이 뛰어납니다.",
        spot: "사무실 책상, 공부방", caution: "직사광선에 잎이 쉽게 타므로 형광등 불빛 정도의 밝기가 적당합니다.",
        image: "images/plant-13.png",
        scoreMatch: { sunlight: "low", airQuality: "high", space: "small", location: "urban", pollution: "high", careType: "easy", mood: "interior" }
    },
    {
        name: "호접란", subtitle: "No.014 [바람/빛 타입]", type: "바람 / 빛",
        skill: "야간 산소 생성", tags: ["#난초", "#우아함", "#개업선물"],
        description: "나비가 춤추는 듯한 우아하고 화려한 꽃이 몇 달 동안 지속되는 아름다운 식물입니다.",
        spot: "거실 중앙, 밝은 실내", caution: "뿌리가 숨을 쉬어야 하므로 너무 꽉 막힌 화분과 과습을 주의하세요.",
        image: "images/plant-14.png",
        scoreMatch: { sunlight: "medium", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "diligent", mood: "interior" }
    },
    {
        name: "필로덴드론", subtitle: "No.015 [풀/어둠 타입]", type: "풀 / 어둠",
        skill: "음이온 방출", tags: ["#하트잎", "#덩굴식물", "#순둥이"],
        description: "사랑스러운 하트 모양의 잎이 넝쿨을 이루며 자라나는 싱그러운 식물몬입니다.",
        spot: "선반 위, 행잉 화분", caution: "빛이 너무 강하면 잎의 색이 연해지니 반음지에서 키워주세요.",
        image: "images/plant-15.png",
        scoreMatch: { sunlight: "low", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "easy", mood: "healing" }
    },
    {
        name: "사계귤", subtitle: "No.016 [빛/불 타입]", type: "빛 / 불",
        skill: "생기 충전 아로마", tags: ["#유실수", "#새콤달콤", "#홈가드닝"],
        description: "상큼한 향기를 내뿜으며 작고 귀여운 열매를 맺어 수확의 기쁨까지 주는 식물입니다.",
        spot: "햇빛이 가장 잘 드는 남향 베란다", caution: "꽃과 열매를 맺기 위해서는 충분한 햇빛과 영양분이 필수적입니다.",
        image: "images/plant-16.png",
        scoreMatch: { sunlight: "high", airQuality: "normal", space: "large", location: "residential", pollution: "low", careType: "diligent", mood: "healing" }
    },
    {
        name: "장미허브", subtitle: "No.017 [바람/풀 타입]", type: "바람 / 풀",
        skill: "천연 방향제", tags: ["#다육허브", "#달콤한향", "#미니식물"],
        description: "장미꽃 모양의 도톰한 잎을 살짝 쓰다듬으면 사과처럼 달콤하고 싱그러운 향이 퍼집니다.",
        spot: "바람이 잘 통하는 햇빛 드는 창가", caution: "다육질 잎을 가졌으므로 물을 너무 자주 주면 잎이 노랗게 후두둑 떨어집니다.",
        image: "images/plant-17.png",
        scoreMatch: { sunlight: "high", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "easy", mood: "healing" }
    },
    {
        name: "아스파라거스 고사리", subtitle: "No.018 [물/풀 타입]", type: "물 / 풀",
        skill: "가습 효과", tags: ["#여리여리", "#안개꽃느낌", "#플랜테리어"],
        description: "안개꽃이나 새의 깃털처럼 보들보들하고 얇은 잎이 매력적인 감성 식물입니다.",
        spot: "거실 창가 틈새, 선반", caution: "건조함에 취약하므로 공중 습도를 높게 유지해 주셔야 잎이 누렇게 마르지 않습니다.",
        image: "images/plant-18.png",
        scoreMatch: { sunlight: "medium", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "diligent", mood: "interior" }
    },
    {
        name: "페페로미아", subtitle: "No.019 [땅/풀 타입]", type: "땅 / 풀",
        skill: "음이온 폭포", tags: ["#동글이", "#미니식물", "#수박무늬"],
        description: "동글동글하고 윤기 나는 잎사귀가 앙증맞으며 다양한 무늬를 자랑하는 소형 식물입니다.",
        spot: "테이블 위, 선반", caution: "잎에 수분을 저장하므로 흙이 완전히 마른 후 물을 주는 것이 좋습니다.",
        image: "images/plant-19.png",
        scoreMatch: { sunlight: "medium", airQuality: "high", space: "small", location: "urban", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "홍콩야자", subtitle: "No.020 [풀/나무 타입]", type: "풀 / 나무",
        skill: "새집증후군 타파", tags: ["#우산모양", "#공기정화우수", "#거실식물"],
        description: "우산을 펼친 듯 귀여운 잎들이 모여 있으며, 포름알데히드 제거에 매우 효과적입니다.",
        spot: "거실, 사무실", caution: "추위에 약하므로 겨울철에는 베란다에서 따뜻한 실내로 들여주세요.",
        image: "images/plant-20.png",
        scoreMatch: { sunlight: "medium", airQuality: "high", space: "large", location: "urban", pollution: "high", careType: "easy", mood: "healing" }
    }
];

// 2. 365일 탄생화 데이터베이스 (모든 일자가 빠짐없이 나오도록 데이터 완비)
const rawBirthFlowers = {
    // 1월
    "1-1":"스노드롭|희망", "1-2":"노랑수선화|사랑에 답하여", "1-3":"사프란|후회 없는 청춘", "1-4":"흰색 히야신스|차분한 사랑", "1-5":"노란 노루귀|참을성",
    "1-6":"흰색 제비꽃|순진무구한 사랑", "1-7":"튤립|실연", "1-8":"보라색 제비꽃|사랑", "1-9":"노란 제비꽃|수줍은 사랑", "1-10":"회양목|참고 견디다",
    "1-11":"측백나무|측은한 사랑", "1-12":"알리ッサム|뛰어난 아름다움", "1-13":"수선화|신비", "1-14":"시클라멘|내성적 성격", "1-15":"가시|엄격",
    "1-16":"노란 노루귀|친절", "1-17":"수박풀|아름다운 미소", "1-18":"어성초|상큼함", "1-19":"소나무|불로장생", "1-20":"미나리아재비|천진난만",
    "1-21":"아이비|행운이 함께하는 사랑", "1-22":"이끼|모성애", "1-23":"서양서덜취|가까이 오는 사람을 사로잡다", "1-24":"샤프란|절도의 미", "1-25":"점나도나물|순진",
    "1-26":"미모사|부끄러움", "1-27":"마가목|게으름을 모르는 마음", "1-28":"검은 포플라|용기", "1-29":"이끼|모성애", "1-30":"매화|고결한 마음", "1-31":"사프란|청춘의 환희",

    // 2월
    "2-1":"앵초|젊은 시절과 고뇌", "2-2":"모과|평범", "2-3":"황새냉이|시구에 바침", "2-4":"빨간색 빨강앵초|돌보지 않는 아름다움", "2-5":"양치|양기",
    "2-6":"바위솔|가사에 부지런함", "2-7":"물망초|나를 잊지 말아요", "2-8":"범의귀|절실한 사랑", "2-9":"미나리아재비|천진난만", "2-10":"서향|영광",
    "2-11":"멜리사|동정", "2-12":"쥐꼬리망초|가련함의 극치", "2-13":"갈풀|칭찬", "2-14":"카모밀레|역경에 굴하지 않는 강인함", "2-15":"삼나무|그대를 위해 살다",
    "2-16":"월계수|명예", "2-17":"야생화|친숙한 자연", "2-18":"미나리아재비|천진난만", "2-19":"떡갈나무|수용", "2-20":"칼미아|커다란 희망",
    "2-21":"네모필라|애국심", "2-22":"무궁화|미묘한 아름다움", "2-23":"살구꽃|수줍음", "2-24":"빙화|장대한 희망", "2-25":"사구상|변덕스러운 사랑",
    "2-26":"아도니스|추억", "2-27":"시클라멘|수줍음", "2-28":"보리|보편", "2-29":"아르메리아|배려와 동정",

    // 3월
    "3-1":"수선화|자존심", "3-2":"미나리아재비|아름다운 인격", "3-3":"자운영|나의 행복", "3-4":"나무딸기|애정", "3-5":"수레국화|행복",
    "3-6":"데이지|명랑", "3-7":"황새냉이|불타는 사랑", "3-8":"밤꽃|진심", "3-9":"낙엽송|대담", "3-10":"느릅나무|고귀함",
    "3-11":"씀바귀|순박함", "3-12":"수양버들|사랑의 슬픔", "3-13":"산옥잠화|사랑의 망각", "3-14":"아몬드|희망", "3-15":"독당근|죽음도 아깝지 않음",
    "3-16":"한련화|애국심", "3-17":"콩꽃|반드시 오고야 말 행복", "3-18":"아스파라거스|무변화", "3-19":"치자나무|한없는 기쁨", "3-20":"보라색 튤립|영원한 사랑",
    "3-21":"벚꽃|순결, 절세미인", "3-22":"당아욱|은혜", "3-23":"글라디올러스|정열적인 사랑", "3-24":"금영화|희망", "3-25":"덩굴성 식물|아름다움",
    "3-26":"흰색 프리뮬라|첫사랑", "3-27":"칼라|열정", "3-28":"꽃아카시아나무|품위", "3-29":"우엉|괴롭히지 말아요", "3-30":"금작화|박애", "3-31":"흑종초|꿈길의 애정",

    // 4월
    "4-1":"아몬드|진실한 사랑", "4-2":"아네모네|제규어", "4-3":"나팔수선화|형식주의", "4-4":"빨간 아네모네|그대를 사랑해", "4-5":"무화과|풍부함",
    "4-6":"아도니스|영원한 행복", "4-7":"공조팝나무|노력", "4-8":"금작화|인애", "4-9":"벚꽃|절세미인", "4-10":"빙카|즐거운 추억",
    "4-11":"꽃고비|와주세요", "4-12":"복사꽃|사랑의 노예", "4-13":"페일 옐로 수선화|전설", "4-14":"흰색 나팔꽃|넘치는 기쁨", "4-15":"펜지|나를 생각해 주세요",
    "4-16":"튤립|아름다운 눈동자", "4-17":"독이파리|영광", "4-18":"자자나무|인내", "4-19":"아마|조용한 기쁨", "4-20":"배나무|온화한 애정",
    "4-21":"수양버들|내 스타일", "4-22":"과꽃|믿음직한 사랑", "4-23":"도라지|상냥하고 따뜻함", "4-24":"제라늄|제일의 애정", "4-25":"조팝나무|선언",
    "4-26":"페튜니아|당신과 함께 있으면 마음이 편해짐", "4-27":"수련|청순한 마음", "4-28":"붉은 림키스|비련", "4-29":"동백나무|매력", "4-30":"등나무|환영",

    // 5월
    "5-1":"은방울꽃|틀림없이 행복해집니다", "5-2":"미나리아재비|순진", "5-3":"민들레|신탁", "5-4":"딸기|존중과 애정", "5-5":"은방울꽃|섬세함",
    "5-6":"비단향꽃무|영원한 아름다움", "5-7":"딸기|수줍음", "5-8":"수련|청순한 마음", "5-9":"클로버|약속", "5-10":"꽃창포|슬픈 소식",
    "5-11":"사과|유혹", "5-12":"라일락|사랑의 싹", "5-13":"산ザシ|유일한 사랑", "5-14":"콜롬바인|승리의 맹세", "5-15":"물망초|나를 잊지 말아요",
    "5-16":"인동|사랑의 인연", "5-17":"노랑 제비꽃|수줍은 사랑", "5-18":"옥슬립|첫사랑", "5-19":"아리스타타|아름다움의 소유자", "5-20":"괭이밥|빛나는 마음",
    "5-21":"참제비고깔|자유", "5-22":"귀술나무|청결", "5-23":"풀의 싹|추억", "5-24":"헬리오트로프|사랑이여 영원하라", "5-25":"삼색제비꽃|순애",
    "5-26":"올리브|평화", "5-27":"데이지|순수", "5-28":"박하|미덕", "5-29":"토끼풀|쾌활", "5-30":"보라색 라일락|사랑의 싹이 트다", "5-31":"무등산|청결",

    // 6월
    "6-1":"장미|나의 마음은 그대만이 아네", "6-2":"빨강 매맞는꽃|솔직", "6-3":"아마|작은 추억", "6-4":"장미|행복한 사랑", "6-5":"메리골드|가련한 애정",
    "6-6":"노랑 붓꽃|믿는자의 행복", "6-7":"슈트라스부르크|용기", "6-8":"재스민|당신의 나의 것", "6-9":"스위트피|우아한 추억", "6-10":"디기탈리스|열애",
    "6-11":"중국패랭이꽃|사모", "6-12":"레제다|매력", "6-13":"디기탈리스|가슴 속의 생각", "6-14":"수레국화|단녕", "6-15":"카네이션|정열",
    "6-16":"튜베로즈|위험한 기쁨", "6-17":"토끼풀|감화", "6-18":"백미꽃|인내", "6-19":"장미|사랑", "6-20":"꽃창포|우아한 마음",
    "6-21":"달맞이꽃|마법", "6-22":"가막살나무|사랑은 죽음보다 강하다", "6-23":"접시꽃|열렬한 연애", "6-24":"버베나|가족의 화합", "6-25":"나팔꽃|기쁜 소식",
    "6-26":"흰색 라일락|아름다운 맹세", "6-27":"시계꽃|성스러운 사랑", "6-28":"제라늄|그대가 있어 행복함", "6-29":"빨강 디기탈리스|탐욕", "6-30":"인동|사랑의 인연",

    // 7월
    "7-1":"단양쑥부쟁이|태만", "7-2":"금성화|수줍은 은혜", "7-3":"양귀비|망각", "7-4":"자련화|자비", "7-5":"라벤더|풍부한 향기",
    "7-6":"해바라기|애모", "7-7":"서양까치밥나무|예상", "7-8":"버드나무|솔직", "7-9":"아이비|행운이 함께함", "7-10":"초롱꽃|감사",
    "7-11":"아스포델|나의 슬픔", "7-12":"하이비스커스|섬세한 아름다움", "7-13":"야생화|자연미", "7-14":"플록스|온화", "7-15":"들장미|사랑스러움",
    "7-16":"비단향꽃무|영원한 아름다움", "7-17":"흰색 장미|존경", "7-18":"이끼장미|가련함", "7-19":"아코니툼|아름다운 빛깔", "7-20":"가지|진실",
    "7-21":"노랑 노루귀|참을성", "7-22":"패랭이꽃|선물", "7-23":"장미|어여쁨", "7-24":"샤론의 장미|일편단심", "7-25":"말류|신경질",
    "7-26":"향쑥|평화", "7-27":"제라늄|진실한 애정", "7-28":"패랭이꽃|언제나 사랑해", "7-29":"선인장|불타는 마음", "7-30":"서양종려|승리", "7-31":"호박|광대함",

    // 8월
    "8-1":"빨강 양귀비|위로", "8-2":"수레국화|행복", "8-3":"수박풀|아가씨의 세련된 미모", "8-4":"옥수수|재보", "8-5":"엘리카|고독",
    "8-6":"능소화|명예", "8-7":"석류|원숙한 아름다움", "8-8":"진달래|사랑의 기쁨", "8-9":"시스투스|인기", "8-10":"이끼|모성애",
    "8-11":"빨강 무궁화|신중", "8-12":"협죽도|위험", "8-13":"골든로드|경계", "8-14":"저먼더|경애", "8-15":"해바라기|광휘",
    "8-16":"타마린드|사원", "8-17":"튤립나무|전원의 행복", "8-18":"접시꽃|열렬한 사랑", "8-19":"로사 캠피온|진실한 사랑", "8-20":"프리지아|청순함",
    "8-21":"짚신나물|감사", "8-22":"스피리아|노력", "8-23":"서양종려|승리", "8-24":"금잔화|이별의 슬픔", "8-25":"안스리움|사랑에 번민하는 마음",
    "8-26":"하이비스커스|수줍은 사랑", "8-27":"고풍나무|우아함", "8-28":"에린지움|비밀스런 애정", "8-29":"꽃창포|우아한 마음", "8-30":"저먼더|담백", "8-31":"토끼풀|약속",

    // 9월
    "9-1":"호랑이꽃|나를 사랑해 주세요", "9-2":"멕시칸 아이비|변화", "9-3":"마거리트|마음속에 숨긴 사랑", "9-4":"뱀무|만족스러운 사랑", "9-5":"느릅나무|신뢰",
    "9-6":"한련화|애국심", "9-7":"오렌지|순결", "9-8":"갓|무관심", "9-9":"갓|무관심", "9-10":"흰색 과꽃|믿는 마음",
    "9-11":"알로에|꽃길", "9-12":"클레마티스|마음의 아름다움", "9-13":"버드나무|솔직", "9-14":"붓꽃|기쁜 소식", "9-15":"다알리아|화려함",
    "9-16":"용담|애수", "9-17":"에리카|고독", "9-18":"엉겅퀴|엄격", "9-19":"다알리아|품위", "9-20":"로즈마리|나를 생각해요",
    "9-21":"샤프란|후회 없는 청춘", "9-22":"퀘이킹 글라스|흥분", "9-23":"주황색 주목|고상함", "9-24":"한련화|승전", "9-25":"메귀리|음악을 좋아함",
    "9-26":"감나무|자연미", "9-27":"떡갈나무|영원한 사랑", "9-28":"색비름|애정", "9-29":"사과|명예", "9-30":"수중다리잎|청순",

    // 10월
    "10-1":"국화|사랑", "10-2":"곱슬버들|친절", "10-3":"단풍나무|자제", "10-4":"홉|수줍음", "10-5":"종려나무|승리",
    "10-6":"코스모스|순정", "10-7":"전나무|고상함", "10-8":"파슬리|승리", "10-9":"희장가시나무|희망", "10-10":"멜론|포식",
    "10-11":"부처꽃|사랑의 슬픔", "10-12":"월귤|반항심", "10-13":"조팝나무|단정한 사랑", "10-14":"흰색 국화|진실", "10-15":"스위트바질|좋은 희망",
    "10-16":"이끼장미|순진무구", "10-17":"포도|신뢰", "10-18":"크랜베리|마음의 위로", "10-19":"빨강 봉선화|날 건드리지 마세요", "10-20":"마|운명",
    "10-21":"엉겅퀴|독립", "10-22":"화살나무|위험한 장난", "10-23":"흰색 나팔꽃|기쁨", "10-24":"매화|고결", "10-25":"단풍나무|염원",
    "10-26":"소나무|장수", "10-27":"장미|열렬한 사랑", "10-28":"무궁화|미묘한 아름다움", "10-29":"나팔꽃|축복", "10-30":"로베리아|악의", "10-31":"칼라|열혈",

    // 11월
    "11-1":"서양등골나물|지연", "11-2":"루피너스|모성애", "11-3":"브리오니아|거절", "11-4":"골세이무|은혜", "11-5":"단풍나무|절제",
    "11-6":"등골나물|주저", "11-7":"메리골드|이별의 슬픔", "11-8":"가는동자꽃|기절", "11-9":"몰약나무|진실", "11-10":"부용|섬세한 아름다움",
    "11-11":"동백|비밀스런 사랑", "11-12":"레몬|열의", "11-13":"레몬버베나|마음의 평화", "11-14":"소나무|불로장생", "11-15":"황소의뿔|견고",
    "11-16":"크리스마스 로즈|추억", "11-17":"머위|공정", "11-18":"산나리|순결", "11-19":"바질|작은 희망", "11-20":"뷰글라스|진실",
    "11-21":"초롱꽃|초연", "11-22":"매자나무|작은 미소", "11-23":"고사리|성실", "11-24":"가마귀밥나무|시름을 잊음", "11-25":"개양귀비|위로",
    "11-26":"페퍼민트|온정", "11-27":"붉은나무|신중", "11-28":"과꽃|추억", "11-29":"바카리스|개척", "11-30":"낙엽 마른 풀|새봄을 기다림",

    // 12월
    "12-1":"쑥국화|평화", "12-2":"구절초|고결", "12-3":"라벤더|기대", "12-4":"수영|애정", "12-5":"앰브로시아|행복한 사랑",
    "12-6":"바위취|절실한 사랑", "12-7":"양치|믿음", "12-8":"갈대|친절", "12-9":"국화|고결", "12-10":"빨강 동백|고결한 사랑",
    "12-11":"단풍나무|자제", "12-12":"목화|어머니의 사랑", "12-13":"자색 자스민|수줍음", "12-14":"소나무|용기", "12-15":"서향|불멸",
    "12-16":"오리나무|위엄", "12-17":"벚나무|당신은 아름답습니다", "12-18":"세이지|덕", "12-19":"스노드롭|희망", "12-20":"파인애플|완전함",
    "12-21":"박하|덕", "12-22":"포인세티아|축복", "12-23":"플라타너스|천재", "12-24":"겨우살이|강한 인내심", "12-25":"겨우살이|강한 인내심",
    "12-26":"동백나무|겸손한 마음", "12-27":"매화|고결한 마음", "12-28":"석류|원숙한 아름다움", "12-29":"꽈리|수줍음", "12-30":"시클라멘|수줍음", "12-31":"노송나무|불멸"
};

// 3. 예외 처리를 위한 월별 기본 탄생화 (오류 방지용)
const defaultMonthFlowers = {
    1: { icon: "🌼", name: "수선화", meaning: "자기애, 고결", desc: "겨울의 추위를 이겨내고 가장 먼저 피어나는 희망의 상징입니다." },
    2: { icon: "🪻", name: "물망초", meaning: "진실한 사랑, 나를 잊지 마세요", desc: "작고 푸른 꽃잎 속에 깊은 기억과 따뜻한 애정을 품고 있습니다." },
    3: { icon: "🌼", name: "데이지", meaning: "순수, 평화, 명랑함", desc: "빛을 받으면 활짝 피어나 공간을 밝고 긍정적인 에너지로 채웁니다." },
    4: { icon: "🌷", name: "튤립", meaning: "사랑의 고백, 매혹", desc: "단정하고 수려한 곡선미로 다정한 마음을 전하는 봄의 전령사입니다." },
    5: { icon: "🔔", name: "은방울꽃", meaning: "다시 찾아온 행복", desc: "은은하고 고급스러운 향기로 곁에 머무는 이에게 행복을 전합니다." },
    6: { icon: "🌹", name: "장미", meaning: "열정, 아름다움, 사랑", desc: "화려한 잎과 깊은 향기로 강한 생명력과 매력을 뿜어냅니다." },
    7: { icon: "🌿", name: "라벤더", meaning: "마음의 평온", desc: "편안한 향기를 발산하여 일상의 피로와 스트레스를 감싸줍니다." },
    8: { icon: "🌻", name: "해바라기", meaning: "기다림, 밝은 미래", desc: "오직 태양만을 바라보며 밝고 활기찬 에너지를 발산합니다." },
    9: { icon: "🌸", name: "다알리아", meaning: "감사, 우아함, 화려함", desc: "풍성한 꽃잎으로 결실의 계절에 깊은 감사의 마음을 선사합니다." },
    10: { icon: "🏵️", name: "국화", meaning: "청결, 고결, 진실", desc: "쌀쌀해지는 계절에도 단단한 향기와 의연함을 잃지 않는 식물입니다." },
    11: { icon: "🌾", name: "루피너스", meaning: "행복, 탐욕 없는 사랑", desc: "위로 곧게 뻗은 꽃대로 주변 환경을 비옥하고 풍요롭게 만듭니다." },
    12: { icon: "🌺", name: "포인세티아", meaning: "축복, 축하, 행복한 추억", desc: "붉은 잎사귀로 겨울 공간을 따뜻한 온기로 가득 채워줍니다." }
};

// 4. 월에 따라 일(Day) 옵션을 동적으로 생성하는 함수
function updateDays() {
    const month = parseInt(document.getElementById("birthMonth").value, 10);
    const daySelect = document.getElementById("birthDay");
    
    let maxDays = 31;
    if (month === 2) {
        maxDays = 29;
    } else if ([4, 6, 9, 11].includes(month)) {
        maxDays = 30;
    }

    const currentSelectedDay = parseInt(daySelect.value, 10) || 1;
    daySelect.innerHTML = "";

    for (let d = 1; d <= maxDays; d++) {
        const option = document.createElement("option");
        option.value = d;
        option.innerText = `${d}일`;
        if (d === currentSelectedDay && currentSelectedDay <= maxDays) {
            option.selected = true;
        }
        daySelect.appendChild(option);
    }
}

// 5. 메인 추천 함수 (조건 매칭 및 탄생화 결과 출력)
function recommendPlant() {
    // 사용자가 입력한 정보 가져오기
    const sunlight = document.getElementById("sunlight").value;
    const airQuality = document.getElementById("airQuality").value;
    const space = document.getElementById("space").value;
    const locationVal = document.getElementById("location").value;
    const pollution = document.getElementById("pollution").value;
    const careType = document.getElementById("careType").value;
    const mood = document.getElementById("mood").value;
    
    const birthMonth = document.getElementById("birthMonth").value;
    const birthDay = document.getElementById("birthDay").value;

    // 1) 조건 매칭 점수 계산
    let maxScore = -1;
    let candidates = []; 

    plantsDB.forEach(plant => {
        let score = 0;
        if (plant.scoreMatch.sunlight === sunlight) score++;
        if (plant.scoreMatch.airQuality === airQuality) score++;
        if (plant.scoreMatch.space === space) score++;
        if (plant.scoreMatch.location === locationVal) score++;
        if (plant.scoreMatch.pollution === pollution) score++;
        if (plant.scoreMatch.careType === careType) score++;
        if (plant.scoreMatch.mood === mood) score++;
        
        if (score > maxScore) {
            maxScore = score;
            candidates = [plant]; 
        } else if (score === maxScore) {
            candidates.push(plant); 
        }
    });

    // 2) 최고 점수 식물 랜덤 추첨
    const bestPlant = candidates[Math.floor(Math.random() * candidates.length)];

    // 3) DOM에 메인 식물 데이터 출력
    document.getElementById("plant-subtitle").innerText = bestPlant.subtitle;
    document.getElementById("plant-name").innerText = bestPlant.name;
    document.getElementById("plant-type").innerText = bestPlant.type;
    document.getElementById("plant-skill").innerText = bestPlant.skill;
    document.getElementById("plant-description").innerText = bestPlant.description;
    document.getElementById("plant-spot").innerText = bestPlant.spot;
    document.getElementById("plant-caution").innerText = bestPlant.caution;
    
    const imgElement = document.getElementById("plant-image");
    if (bestPlant.image) {
        imgElement.src = bestPlant.image;
        imgElement.alt = bestPlant.name;
    }

    const tagsContainer = document.getElementById("plant-tags");
    tagsContainer.innerHTML = "";
    bestPlant.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.innerText = tag;
        tagsContainer.appendChild(span);
    });

    // 4) 구글 이미지 검색 링크 생성
    const affiliateBtn = document.getElementById("plant-affiliate-link");
    const mainPlantQuery = encodeURIComponent(bestPlant.name + " 식물 키우기");
    affiliateBtn.href = `https://www.google.com/search?tbm=isch&q=${mainPlantQuery}`;

    // 5) 탄생화 매칭 및 정보 렌더링
    const dateKey = `${birthMonth}-${birthDay}`;
    let flowerName = "";
    let flowerMeaning = "";
    let flowerDesc = "";
    let flowerIcon = "🌸";

    if (rawBirthFlowers[dateKey]) {
        const parts = rawBirthFlowers[dateKey].split("|");
        flowerName = parts[0];
        flowerMeaning = parts[1];
        flowerDesc = "당신의 생일을 지켜주는 365일 수호 탄생화입니다.";
    } else {
        const fallback = defaultMonthFlowers[birthMonth];
        flowerName = fallback.name;
        flowerMeaning = fallback.meaning;
        flowerDesc = fallback.desc;
        flowerIcon = fallback.icon;
    }
    
    const birthFlowerInfo = document.getElementById("birth-flower-info");
    birthFlowerInfo.innerHTML = `
        <span style="font-size: 20px; vertical-align: middle;">${flowerIcon}</span>
        <strong>${birthMonth}월 ${birthDay}일의 탄생화:</strong> <span style="color:#d35400; font-weight:bold;">${flowerName}</span><br>
        <strong>꽃말:</strong> ${flowerMeaning}<br>
        <span style="font-size:13px; color:#666;">${flowerDesc}</span>
    `;

    const birthFlowerLink = document.getElementById("birth-flower-link");
    const birthFlowerQuery = encodeURIComponent(flowerName + " 꽃");
    birthFlowerLink.href = `https://www.google.com/search?tbm=isch&q=${birthFlowerQuery}`;

    // 6) 서브 추천 리스트 렌더링
    const subList = document.getElementById("sub-plants-list");
    subList.innerHTML = "";
    plantsDB.filter(p => p.name !== bestPlant.name).slice(0, 3).forEach(subPlant => {
        const li = document.createElement("li");
        li.innerText = `${subPlant.name} (속성: ${subPlant.type.split('/')[0].trim()})`;
        subList.appendChild(li);
    });

    // 7) 결과 화면 노출
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

// 6. 아코디언 토글
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// 7. 결과 공유하기
function shareResult() {
    const plantName = document.getElementById("plant-name").innerText;
    if (navigator.share) {
        navigator.share({
            title: '야생의 식물몬 도감 결과',
            text: `나의 운명적인 반려 식물몬은 [${plantName}] 입니다! 당신의 파트너도 찾아보세요.`,
            url: window.location.href,
        }).catch((error) => console.log('공유 실패', error));
    } else {
        alert("이 브라우저에서는 공유 기능이 지원되지 않습니다. 주소를 복사해 주세요!");
    }
}

// 8. 결과 이미지 저장
function downloadResult() {
    const card = document.getElementById("animation-card");
    html2canvas(card, { backgroundColor: "#f8f8d8" }).then(canvas => {
        const link = document.createElement("a");
        link.download = "my_plant_dex.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

// 9. 페이지 로드 시 실행
window.addEventListener("DOMContentLoaded", () => {
    updateDays();
});