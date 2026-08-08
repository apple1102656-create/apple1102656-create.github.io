// 1. 20종 식물몬 전체 데이터베이스 (7가지 질문 조건 완벽 매칭 및 도감 넘버링)
const plantsDB = [
    {
        name: "인도고무나무",
        subtitle: "No.001 [땅/풀 타입]",
        type: "땅 / 풀",
        skill: "미세먼지 흡착 (공기 정화)",
        tags: ["#공기정화", "#듬직함", "#거실추천"],
        description: "넓고 두꺼운 잎으로 공기 중의 미세먼지를 싹 흡수하는 듬직한 반려식물입니다.",
        spot: "거실 창가, 베란다",
        caution: "잎에 먼지가 쌓이면 호흡이 어려우니 가끔 젖은 수건으로 닦아주세요.",
        image: "images/plant-1.png",
        scoreMatch: { sunlight: "medium", airQuality: "high", space: "large", location: "urban", pollution: "high", careType: "easy", mood: "interior" }
    },
    {
        name: "틸란드시아",
        subtitle: "No.002 [바람/풀 타입]",
        type: "바람 / 풀",
        skill: "공중 습도 조절",
        tags: ["#먼지먹는식물", "#에어플랜트", "#행잉식물"],
        description: "흙 없이도 공기 중의 수분과 먼지를 먹고 자라는 자유로운 영혼의 식물몬입니다.",
        spot: "창가, 벽면, 책상 위",
        caution: "일주일에 1~2회 물에 10분 정도 푹 담갔다가 잘 말려주세요.",
        image: "images/plant-2.png",
        scoreMatch: { sunlight: "medium", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "스킨답서스",
        subtitle: "No.003 [풀/독 타입]",
        type: "풀 / 독",
        skill: "일산화탄소 제거",
        tags: ["#생명력갑", "#주방식물", "#수경재배"],
        description: "어디서든 끈질기게 살아남으며 주방의 일산화탄소를 맑게 정화해 줍니다.",
        spot: "주방 가스레인지 주변, 어두운 실내",
        caution: "너무 길게 자라면 줄기를 잘라 물병에 꽂아보세요. 금방 뿌리를 내립니다.",
        image: "images/plant-3.png",
        scoreMatch: { sunlight: "low", airQuality: "high", space: "small", location: "urban", pollution: "high", careType: "easy", mood: "healing" }
    },
    {
        name: "아레카 야자",
        subtitle: "No.004 [물/바람 타입]",
        type: "물 / 바람",
        skill: "천연 가습",
        tags: ["#천연가습기", "#휴양지감성", "#NASA1위"],
        description: "실내를 트로피컬 휴양지처럼 만들어주며 하루에 엄청난 양의 수분을 내뿜습니다.",
        spot: "거실 소파 옆, 넓은 실내",
        caution: "잎 끝이 마르기 쉬우니 주변에 분무기로 물을 자주 뿌려주세요.",
        image: "images/plant-4.png",
        scoreMatch: { sunlight: "high", airQuality: "high", space: "large", location: "urban", pollution: "high", careType: "diligent", mood: "healing" }
    },
    {
        name: "몬스테라",
        subtitle: "No.005 [풀/어둠 타입]",
        type: "풀 / 어둠",
        skill: "광합성 폭발",
        tags: ["#플랜테리어", "#찢어진잎", "#순둥이"],
        description: "이국적인 찢어진 잎이 매력적이며 초보자도 쉽게 키울 수 있는 대세 식물입니다.",
        spot: "거실 창가, 통풍이 잘 되는 곳",
        caution: "직사광선보다는 은은한 간접광을 좋아합니다.",
        image: "images/plant-5.png",
        scoreMatch: { sunlight: "medium", airQuality: "normal", space: "large", location: "residential", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "산세베리아",
        subtitle: "No.006 [땅/독 타입]",
        type: "땅 / 독",
        skill: "야간 산소 방출",
        tags: ["#음이온", "#침실식물", "#방치형"],
        description: "밤에 이산화탄소를 흡수하고 산소를 내뿜어 여러분의 숙면을 지켜줍니다.",
        spot: "침실 머리맡, 협탁 위",
        caution: "물을 너무 많이 주면 뿌리가 썩으니 한 달에 한 번만 주세요.",
        image: "images/plant-6.png",
        scoreMatch: { sunlight: "low", airQuality: "high", space: "small", location: "urban", pollution: "low", careType: "easy", mood: "healing" }
    },
    {
        name: "파키라",
        subtitle: "No.007 [풀/땅 타입]",
        type: "풀 / 땅",
        skill: "이산화탄소 포집",
        tags: ["#금전운", "#머니트리", "#개업선물"],
        description: "땋은 듯한 굵은 목대와 야자수 같은 잎이 이국적이며 금전운을 부른다고 알려져 있습니다.",
        spot: "거실 코너, 서재",
        caution: "몸통에 물을 저장하므로 흙이 완전히 말랐을 때 물을 주세요.",
        image: "images/plant-7.png",
        scoreMatch: { sunlight: "low", airQuality: "high", space: "large", location: "urban", pollution: "high", careType: "easy", mood: "interior" }
    },
    {
        name: "스파티필름",
        subtitle: "No.008 [물/풀 타입]",
        type: "물 / 풀",
        skill: "유해물질 강력 흡수",
        tags: ["#하얀꽃", "#공기정화", "#알림요정"],
        description: "우아한 하얀 꽃을 피우며, 물이 고플 땐 잎을 축 늘어뜨려 신호를 보내는 똑똑한 식물입니다.",
        spot: "화장실 입구, 주방",
        caution: "잎이 처지면 물이 필요하다는 뜻이니 바로 흠뻑 주세요.",
        image: "images/plant-8.png",
        scoreMatch: { sunlight: "low", airQuality: "high", space: "small", location: "urban", pollution: "high", careType: "diligent", mood: "healing" }
    },
    {
        name: "유칼립투스",
        subtitle: "No.009 [바람/풀 타입]",
        type: "바람 / 풀",
        skill: "비염 완화 아로마",
        tags: ["#비염추천", "#허브", "#상쾌한향"],
        description: "동글동글한 은빛 잎에서 나는 상쾌한 향기가 코를 뻥 뚫어주고 기분을 맑게 합니다.",
        spot: "바람이 잘 통하는 창가",
        caution: "햇빛과 바람을 매우 좋아하므로 환기가 부족하면 금방 시듭니다.",
        image: "images/plant-9.png",
        scoreMatch: { sunlight: "high", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "diligent", mood: "healing" }
    },
    {
        name: "스투키",
        subtitle: "No.010 [땅/불 타입]",
        type: "땅 / 불",
        skill: "전자파 차단",
        tags: ["#전자파차단", "#사무실식물", "#다육식물"],
        description: "오동통하고 곧게 뻗은 모양이 귀여우며, 관리가 거의 필요 없는 진정한 방치형 식물입니다.",
        spot: "컴퓨터 모니터 옆, TV 선반",
        caution: "물을 자주 주면 물러서 죽을 수 있으니 한두 달에 한 번만 조금 주세요.",
        image: "images/plant-10.png",
        scoreMatch: { sunlight: "medium", airQuality: "normal", space: "small", location: "urban", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "여인초",
        subtitle: "No.011 [풀/빛 타입]",
        type: "풀 / 빛",
        skill: "수분 발산",
        tags: ["#대형식물", "#카페감성", "#인테리어"],
        description: "부채처럼 크고 시원하게 뻗은 잎이 공간을 압도하며 트로피컬한 무드를 연출합니다.",
        spot: "넓은 거실, 사무실 로비",
        caution: "잎이 바람이나 충격에 의해 갈라질 수 있으나 자연스러운 현상입니다.",
        image: "images/plant-11.png",
        scoreMatch: { sunlight: "high", airQuality: "normal", space: "large", location: "residential", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "금전수",
        subtitle: "No.012 [땅/번개 타입]",
        type: "땅 / 번개",
        skill: "재물운 버프",
        tags: ["#돈나무", "#집들이선물", "#강인함"],
        description: "동전을 꿰어놓은 듯한 반짝이는 잎사귀가 특징이며 집안에 부를 가져다준다는 속설이 있습니다.",
        spot: "거실 입구, 현관 근처",
        caution: "알뿌리에 수분을 가득 머금고 있어 과습에 매우 취약합니다.",
        image: "images/plant-12.png",
        scoreMatch: { sunlight: "low", airQuality: "normal", space: "large", location: "urban", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "테이블야자",
        subtitle: "No.013 [풀/물 타입]",
        type: "풀 / 물",
        skill: "초소형 공기정화",
        tags: ["#책상식물", "#반음지", "#순둥이"],
        description: "작고 아담한 크기로 책상이나 테이블 위에 올려두기 좋으며 화학물질 흡수 능력이 뛰어납니다.",
        spot: "사무실 책상, 공부방",
        caution: "직사광선에 잎이 쉽게 타므로 형광등 불빛 정도의 밝기가 적당합니다.",
        image: "images/plant-13.png",
        scoreMatch: { sunlight: "low", airQuality: "high", space: "small", location: "urban", pollution: "high", careType: "easy", mood: "interior" }
    },
    {
        name: "호접란",
        subtitle: "No.014 [바람/빛 타입]",
        type: "바람 / 빛",
        skill: "야간 산소 생성",
        tags: ["#난초", "#우아함", "#개업선물"],
        description: "나비가 춤추는 듯한 우아하고 화려한 꽃이 몇 달 동안 지속되는 아름다운 식물입니다.",
        spot: "거실 중앙, 밝은 실내",
        caution: "뿌리가 숨을 쉬어야 하므로 너무 꽉 막힌 화분과 과습을 주의하세요.",
        image: "images/plant-14.png",
        scoreMatch: { sunlight: "medium", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "diligent", mood: "interior" }
    },
    {
        name: "필로덴드론",
        subtitle: "No.015 [풀/어둠 타입]",
        type: "풀 / 어둠",
        skill: "음이온 방출",
        tags: ["#하트잎", "#덩굴식물", "#순둥이"],
        description: "사랑스러운 하트 모양의 잎이 넝쿨을 이루며 자라나는 싱그러운 식물몬입니다.",
        spot: "선반 위, 행잉 화분",
        caution: "빛이 너무 강하면 잎의 색이 연해지니 반음지에서 키워주세요.",
        image: "images/plant-15.png",
        scoreMatch: { sunlight: "low", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "easy", mood: "healing" }
    },
    {
        name: "사계귤",
        subtitle: "No.016 [빛/불 타입]",
        type: "빛 / 불",
        skill: "생기 충전 아로마",
        tags: ["#유실수", "#새콤달콤", "#홈가드닝"],
        description: "상큼한 향기를 내뿜으며 작고 귀여운 열매를 맺어 수확의 기쁨까지 주는 식물입니다.",
        spot: "햇빛이 가장 잘 드는 남향 베란다",
        caution: "꽃과 열매를 맺기 위해서는 충분한 햇빛과 영양분이 필수적입니다.",
        image: "images/plant-16.png",
        scoreMatch: { sunlight: "high", airQuality: "normal", space: "large", location: "residential", pollution: "low", careType: "diligent", mood: "healing" }
    },
    {
        name: "장미허브",
        subtitle: "No.017 [바람/풀 타입]",
        type: "바람 / 풀",
        skill: "천연 방향제",
        tags: ["#다육허브", "#달콤한향", "#미니식물"],
        description: "장미꽃 모양의 도톰한 잎을 살짝 쓰다듬으면 사과처럼 달콤하고 싱그러운 향이 퍼집니다.",
        spot: "바람이 잘 통하는 햇빛 드는 창가",
        caution: "다육질 잎을 가졌으므로 물을 너무 자주 주면 잎이 노랗게 후두둑 떨어집니다.",
        image: "images/plant-17.png",
        scoreMatch: { sunlight: "high", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "easy", mood: "healing" }
    },
    {
        name: "아스파라거스 고사리",
        subtitle: "No.018 [물/풀 타입]",
        type: "물 / 풀",
        skill: "가습 효과",
        tags: ["#여리여리", "#안개꽃느낌", "#플랜테리어"],
        description: "안개꽃이나 새의 깃털처럼 보들보들하고 얇은 잎이 매력적인 감성 식물입니다.",
        spot: "거실 창가 틈새, 선반",
        caution: "건조함에 취약하므로 공중 습도를 높게 유지해 주셔야 잎이 누렇게 마르지 않습니다.",
        image: "images/plant-18.png",
        scoreMatch: { sunlight: "medium", airQuality: "normal", space: "small", location: "residential", pollution: "low", careType: "diligent", mood: "interior" }
    },
    {
        name: "페페로미아",
        subtitle: "No.019 [땅/풀 타입]",
        type: "땅 / 풀",
        skill: "음이온 폭포",
        tags: ["#동글이", "#미니식물", "#수박무늬"],
        description: "동글동글하고 윤기 나는 잎사귀가 앙증맞으며 다양한 무늬를 자랑하는 소형 식물입니다.",
        spot: "테이블 위, 선반",
        caution: "잎에 수분을 저장하므로 흙이 완전히 마른 후 물을 주는 것이 좋습니다.",
        image: "images/plant-19.png",
        scoreMatch: { sunlight: "medium", airQuality: "high", space: "small", location: "urban", pollution: "low", careType: "easy", mood: "interior" }
    },
    {
        name: "홍콩야자",
        subtitle: "No.020 [풀/나무 타입]",
        type: "풀 / 나무",
        skill: "새집증후군 타파",
        tags: ["#우산모양", "#공기정화우수", "#거실식물"],
        description: "우산을 펼친 듯 귀여운 잎들이 모여 있으며, 포름알데히드 제거에 매우 효과적입니다.",
        spot: "거실, 사무실",
        caution: "추위에 약하므로 겨울철에는 베란다에서 따뜻한 실내로 들여주세요.",
        image: "images/plant-20.png",
        scoreMatch: { sunlight: "medium", airQuality: "high", space: "large", location: "urban", pollution: "high", careType: "easy", mood: "healing" }
    }
];

// 2. 365일 탄생화 데이터 (모든 일자가 빠짐없이 나오도록 핵심 데이터와 기본값 병합)
const rawBirthFlowers = {
    // 1월 핵심 탄생화
    "1-1":"스노드롭|희망", "1-2":"노랑수선화|사랑에 답하여", "1-3":"사프란|후회 없는 청춘", "1-10":"회양목|참고 견뎌냄", "1-15":"가시|엄격", "1-20":"미나리아재비|천진난만", "1-27":"마가목|게으름을 모르는 마음", "1-31":"노란 사프란|청춘의 환희",
    // 2월 핵심 탄생화
    "2-1":"앵초|젊은 시절과 고뇌", "2-7":"물망초|나를 잊지 말아요", "2-14":"카모밀레|역경에 굴하지 않는 강인함", "2-16":"월계수|명예", "2-22":"무궁화|미묘한 아름다움", "2-29":"아르메리아|배려와 동정",
    // 3월 핵심 탄생화
    "3-1":"수선화|자존심", "3-6":"데이지|명랑", "3-14":"아몬드|희망", "3-21":"벚꽃|순결, 절세미인", "3-25":"덩굴성 식물|아름다움",
    // 4월 핵심 탄생화
    "4-1":"아몬드|진실한 사랑", "4-5":"무화과|풍부함", "4-15":"펜지|나를 생각해 주세요", "4-23":"도라지|상냥하고 따뜻함",
    // 5월 핵심 탄생화
    "5-1":"은방울꽃|틀림없이 행복해집니다", "5-5":"은방울꽃|섬세함", "5-15":"물망초|나를 잊지 말아요", "5-20":"괭이밥|빛나는 마음",
    // 6월 핵심 탄생화
    "6-1":"장미|나의 마음은 그대만이 아네", "6-15":"카네이션|정열", "6-24":"버베나|가족의 화합",
    // 7월 핵심 탄생화
    "7-1":"단양쑥부쟁이|태만", "7-7":"서양까치밥나무|예상", "7-15":"들장미|사랑스러움", "7-20":"가지|진실",
    // 8월 핵심 탄생화
    "8-1":"빨강 양귀비|위로", "8-8":"진달래|사랑의 기쁨", "8-15":"해바라기|광휘", "8-31":"토끼풀|약속",
    // 9월 핵심 탄생화
    "9-1":"호랑이꽃|나를 사랑해 주세요", "9-9":"갓|무관심", "9-15":"다알리아|화려함", "9-25":"메귀리|음악을 좋아함",
    // 10월 핵심 탄생화
    "10-1":"국화|사랑", "10-10":"멜론|포식", "10-20":"마|운명", "10-31":"칼라|열혈",
    // 11월 핵심 탄생화
    "11-1":"서양등골나물|지연", "11-11":"동백|비밀스런 사랑", "11-20":"뷰글라스|진실", "11-30":"낙엽 마른 풀|새봄을 기다림",
    // 12월 핵심 탄생화
    "12-1":"쑥국화|평화", "12-15":"서향|불멸", "12-25":"겨우살이|강한 인내심", "12-31":"노송나무|불멸"
};

// 위 rawBirthFlowers에 없는 날짜를 선택했을 때 보여줄 월별 기본 탄생화 (오류 완벽 방지)
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

// 3. 월에 따라 일(Day) 옵션을 동적으로 생성하는 함수
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

// 4. 메인 추천 함수 (7가지 조건 분석 반영 & 랜덤 추첨 로직)
function recommendPlant() {
    // 사용자가 입력한 7가지 정보 모두 가져오기
    const sunlight = document.getElementById("sunlight").value;
    const airQuality = document.getElementById("airQuality").value;
    const space = document.getElementById("space").value;
    const locationVal = document.getElementById("location").value;
    const pollution = document.getElementById("pollution").value;
    const careType = document.getElementById("careType").value;
    const mood = document.getElementById("mood").value;
    
    // 생년월일 가져오기
    const birthMonth = document.getElementById("birthMonth").value;
    const birthDay = document.getElementById("birthDay").value;

    // 1) 7점 만점으로 조건 매칭 점수 계산
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
        
        // 최고 점수 갱신 및 후보 등록
        if (score > maxScore) {
            maxScore = score;
            candidates = [plant]; 
        } else if (score === maxScore) {
            candidates.push(plant); 
        }
    });

    // 2) 최고 점수를 받은 식물이 여러 개일 경우 랜덤으로 하나 뽑기
    const bestPlant = candidates[Math.floor(Math.random() * candidates.length)];

    // 3) 화면(DOM)에 메인 식물 데이터 출력
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

    // 4) 구글 이미지 검색 링크 동적 생성
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
        flowerDesc = "당신의 생일을 수호하는 특별한 탄생화입니다.";
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

    // 7) 결과 화면 노출 및 스크롤
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

// 5. 아코디언 토글
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// 6. 결과 공유하기 기능
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

// 7. 결과 이미지 저장
function downloadResult() {
    const card = document.getElementById("animation-card");
    html2canvas(card, { backgroundColor: "#f8f8d8" }).then(canvas => {
        const link = document.createElement("a");
        link.download = "my_plant_dex.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

// 8. 페이지 최초 로드 시 실행
window.addEventListener("DOMContentLoaded", () => {
    updateDays();
});