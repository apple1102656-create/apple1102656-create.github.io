// 1. 20종 식물몬 전체 데이터베이스 (실제 파일 이름 plant-1.png ~ plant-20.png 매핑)
const plantsDB = [
    {
        name: "몬스테라",
        subtitle: "거대한 잎사귀의 지배자",
        type: "풀 / 어둠 (크고 넓은 잎, 반음지 생존)",
        skill: "광합성 폭발 (빠른 성장력)",
        tags: ["#플랜테리어끝판왕", "#순둥이", "#폭풍성장"],
        description: "찢어진 잎이 매력적인 열대 우림의 몬스터입니다. 초보자도 쉽게 키울 수 있는 강한 생명력을 자랑합니다.",
        spot: "거실 창가, 통풍이 잘 되는 반음지",
        caution: "직사광선에 잎이 탈 수 있으니 은은한 간접광에서 키워주세요.",
        image: "images/plant-1.png",
        scoreMatch: { sunlight: "medium", space: "large", careType: "easy" }
    },
    {
        name: "틸란드시아",
        subtitle: "공중을 떠도는 먼지사냥꾼",
        type: "바람 / 풀 (흙 없이 자라는 에어플랜트)",
        skill: "미세먼지 흡착 (공기 정화)",
        tags: ["#공중식물", "#먼지먹는식물", "#초미니"],
        description: "흙 없이 공기 중의 수분과 먼지를 먹고 자라는 신비로운 공중 식물몬입니다.",
        spot: "공부방 책상 앞, 벽걸이 장식 선반",
        caution: "주 1~2회 분무기로 물을 뿌려주거나 물에 10분간 담갔다 말려주세요.",
        image: "images/plant-2.png",
        scoreMatch: { sunlight: "medium", space: "small", careType: "easy" }
    },
    {
        name: "아레카야자",
        subtitle: "천연 가습기",
        type: "물 / 바람 (뛰어난 증산작용)",
        skill: "대기 정화 (NASA 선정 공기정화 1위)",
        tags: ["#천연가습", "#거실추천", "#NASA선정"],
        description: "하루에 엄청난 양의 수분을 뿜어내는 천연 가습기 식물몬입니다.",
        spot: "거실 소파 옆, 베란다 내측",
        caution: "잎끝이 마르면 가위로 다듬어주고 분무를 자주 해주세요.",
        image: "images/plant-3.png",
        scoreMatch: { sunlight: "high", space: "large", careType: "diligent" }
    },
    {
        name: "테이블야자",
        subtitle: "아담한 책상 위 야자수",
        type: "풀 / 물 (아담한 크기와 공기정화)",
        skill: "초소형 정화 (암모니아 흡수)",
        tags: ["#책상위야자수", "#화학물질흡수", "#초보집사추천"],
        description: "작고 아담한 크기로 책상 위에 가볍게 올려두기 좋은 미니 식물몬입니다.",
        spot: "사무실 책상, 공부방 창가, 테이블 위",
        caution: "직사광선을 받으면 잎이 노랗게 변하므로 은은한 빛에서 키워주세요.",
        image: "images/plant-4.png",
        scoreMatch: { sunlight: "low", space: "small", careType: "easy" }
    },
    {
        name: "여인초",
        subtitle: "시원하게 뻗은 트로피컬 리프",
        type: "풀 / 빛 (넓은 잎, 시원한 공간 연출)",
        skill: "수분 발산 (실내 습도 조절)",
        tags: ["#카페인테리어", "#대형식물", "#존재감갑"],
        description: "부채처럼 시원하게 펼쳐지는 큰 잎이 매력적인 플랜테리어 대표 식물몬입니다.",
        spot: "넓은 거실 창가, 사무실 로비",
        caution: "잎이 갈라지는 것은 자연스러운 현상이니 통풍에 신경 써주세요.",
        image: "images/plant-5.png",
        scoreMatch: { sunlight: "high", space: "large", careType: "easy" }
    },
    {
        name: "산세베리아",
        subtitle: "밤의 산소공장",
        type: "땅 / 독 (다육질의 단단한 잎)",
        skill: "야간 산소방출 (음이온 생성)",
        tags: ["#침실식물", "#방치형끝판왕", "#생명력탑"],
        description: "밤에 이산화탄소를 흡수하고 산소를 뿜어내어 침실에 최적인 식물몬입니다.",
        spot: "침실 협탁, 침대 머리맡",
        caution: "물을 너무 자주 주면 뿌리가 썩으므로 한 달에 한 번만 주세요.",
        image: "images/plant-6.png",
        scoreMatch: { sunlight: "low", space: "small", careType: "easy" }
    },
    {
        name: "금전수",
        subtitle: "황금빛 행운을 부르는 잎",
        type: "땅 / 번개 (도톰한 잎, 재물운의 상징)",
        skill: "행운의 버프 (휘발성유기화합물 제거)",
        tags: ["#개업선물1위", "#돈나무", "#순둥이"],
        description: "동전을 꿴 듯한 반짝이는 잎을 가진 대표적인 반려 식물몬입니다.",
        spot: "거실 입구, 신발장 근처, 카운터",
        caution: "구근에 물을 저장하므로 흙이 바짝 말랐을 때 물을 주세요.",
        image: "images/plant-7.png",
        scoreMatch: { sunlight: "low", space: "large", careType: "easy" }
    },
    {
        name: "벵갈고무나무",
        subtitle: "따뜻한 햇살을 머금은 잎",
        type: "빛 / 풀 (단단한 목대와 밝은 잎)",
        skill: "미세먼지 흡착 (실내 공기 청정)",
        tags: ["#거실나무", "#공기청정", "#고급인테리어"],
        description: "밝은 연두색 잎맥과 단단한 나무 줄기가 든든한 느낌을 주는 식물몬입니다.",
        spot: "남향 거실 창가, 밝은 테라스",
        caution: "햇빛을 충분히 받아야 잎의 무늬와 색이 선명해집니다.",
        image: "images/plant-8.png",
        scoreMatch: { sunlight: "high", space: "large", careType: "diligent" }
    },
    {
        name: "스파티필름",
        subtitle: "순백의 깃발을 든 정화자",
        type: "물 / 풀 (하얀 꽃과 짙은 녹색 잎)",
        skill: "알코올/아세톤 분해 (유해물질 강력 흡수)",
        tags: ["#공기정화우수", "#하얀꽃", "#수경재배가능"],
        description: "공기 정화 능력이 매우 뛰어나며 우아한 흰색 꽃을 피우는 식물몬입니다.",
        spot: "화장실 입구, 주방 조리대 근처",
        caution: "잎이 아래로 처지면 물이 부족하다는 신호이니 바로 물을 흠뻑 주세요.",
        image: "images/plant-9.png",
        scoreMatch: { sunlight: "low", space: "small", careType: "diligent" }
    },
    {
        name: "선인장",
        subtitle: "사막의 가시 파수꾼",
        type: "땅 / 불 (강한 가시와 두꺼운 몸체)",
        skill: "전자파 차단 (극강의 내건성)",
        tags: ["#전자파차단", "#사막식물", "#물주기잊어도OK"],
        description: "물을 거의 주지 않아도 꿋꿋하게 자리를 지키는 강인한 생명력의 식물몬입니다.",
        spot: "컴퓨터 모니터 옆, TV 선반",
        caution: "습기에 매우 취약하므로 통풍이 잘되고 햇빛이 잘 드는 곳에 두세요.",
        image: "images/plant-10.png",
        scoreMatch: { sunlight: "high", space: "small", careType: "easy" }
    },
    {
        name: "보스턴고사리",
        subtitle: "풍성한 초록빛 폭포수",
        type: "물 / 풀 (늘어지는 섬세한 잎)",
        skill: "포름알데히드 제거 (천연 습도 조절)",
        tags: ["#행잉플랜트", "#습도조절", "#풍성함"],
        description: "새집증후군 원인 물질 제거 능력이 탁월한 싱그러운 고사리 식물몬입니다.",
        spot: "베란다 천장 걸이, 욕실 창가",
        caution: "건조한 환경을 싫어하므로 잎 주변에 자주 분무해 주세요.",
        image: "images/plant-11.png",
        scoreMatch: { sunlight: "medium", space: "small", careType: "diligent" }
    },
    {
        name: "거북알로카시아",
        subtitle: "거북이 등껍질의 신비",
        type: "풀 / 어둠 (독특한 잎맥과 무늬)",
        skill: "이국적 아우라 (플랜테리어 포인트)",
        tags: ["#유니크", "#거북등껍질", "#마니아식물"],
        description: "거북이 등껍질을 닮은 짙은 잎맥이 매혹적인 프리미엄 식물몬입니다.",
        spot: "침실 조명 옆, 인테리어 선반",
        caution: "추위에 약하므로 겨울철에는 따뜻한 실내로 옮겨주세요.",
        image: "images/plant-12.png",
        scoreMatch: { sunlight: "medium", space: "small", careType: "diligent" }
    },
    {
        name: "스킨답서스",
        subtitle: "끈질긴 생명력의 덩굴손",
        type: "풀 / 독 (공기중 유해물질 흡수)",
        skill: "일산화탄소 킬러 (주방 공기정화)",
        tags: ["#생명력갑", "#주방추천", "#덩굴식물"],
        description: "빛이 적은 곳에서도 무럭무럭 자라는 대표적인 국민 식물몬입니다.",
        spot: "주방 가스레인지 주변 선반, 식탁",
        caution: "줄기가 길게 자라면 가지치기를 하여 수경재배로 늘릴 수 있습니다.",
        image: "images/plant-13.png",
        scoreMatch: { sunlight: "low", space: "small", careType: "easy" }
    },
    {
        name: "호접란",
        subtitle: "우아한 나비의 날갯짓",
        type: "바람 / 빛 (화려하고 오래가는 꽃)",
        skill: "힐링 에너지 (야간 이산화탄소 흡수)",
        tags: ["#고급선물", "#오래가는꽃", "#우아함"],
        description: "나비가 날아앉은 듯 우아한 꽃을 피워 공간을 화사하게 채워줍니다.",
        spot: "거실 중앙 테이블, 침실 화장대",
        caution: "꽃잎에 직접 물이 닿지 않도록 뿌리 부분에만 조심해서 물을 주세요.",
        image: "images/plant-14.png",
        scoreMatch: { sunlight: "medium", space: "small", careType: "diligent" }
    },
    {
        name: "하트호야",
        subtitle: "사랑을 전하는 하트잎",
        type: "풀 / 빛 (단단한 하트 모양 다육질 잎)",
        skill: "사랑의 부적 (실내 건조 견딤)",
        tags: ["#하트식물", "#기념일선물", "#귀여움"],
        description: "완벽한 하트 모양의 잎을 가져 선물용으로 큰 사랑을 받는 식물몬입니다.",
        spot: "사무실 책상, 창틀 위",
        caution: "다육식물이므로 잎이 쭈글거릴 때까지 물을 아껴서 주세요.",
        image: "images/plant-15.png",
        scoreMatch: { sunlight: "high", space: "small", careType: "easy" }
    },
    {
        name: "금귤나무",
        subtitle: "주황빛 열매가 열리는 마법",
        type: "빛 / 불 (향기로운 꽃과 상큼한 열매)",
        skill: "생기 충전 (비타민 향기 발산)",
        tags: ["#유실수", "#홈가드닝", "#열매식물"],
        description: "작은 주황색 열매와 향기로운 꽃으로 키우는 재미를 선사하는 식물몬입니다.",
        spot: "햇빛이 가장 오래 머무는 남향 베란다",
        caution: "통풍과 햇빛이 매우 중요하니 창문을 자주 열어 환기해 주세요.",
        image: "images/plant-16.png",
        scoreMatch: { sunlight: "high", space: "large", careType: "diligent" }
    },
    {
        name: "로즈마리",
        subtitle: "머리를 맑게 하는 허브향",
        type: "바람 / 풀 (강렬한 아로마 향기)",
        skill: "집중력 향상 (천연 항균 및 방충)",
        tags: ["#허브식물", "#기억력향상", "#요리활용"],
        description: "손으로 스치면 싱그러운 허브 향기를 뿜어내어 기분을 상쾌하게 만듭니다.",
        spot: "공부방 창가, 주방 창문",
        caution: "햇빛과 바람을 매우 좋아하므로 통풍이 안 되면 쉽게 시듭니다.",
        image: "images/plant-17.png",
        scoreMatch: { sunlight: "high", space: "small", careType: "diligent" }
    },
    {
        name: "칼라디움",
        subtitle: "화려한 핑크빛 물결",
        type: "빛 / 풀 (다채로운 색상의 하트잎)",
        skill: "시각적 힐링 (감각적 인테리어)",
        tags: ["#핑크식물", "#인스타감성", "#화려함"],
        description: "그림을 그려놓은 듯 화려한 잎 색상으로 눈길을 사로잡는 식물몬입니다.",
        spot: "거실 인테리어 포인트 스팟, 거실 창가",
        caution: "추위에 매우 약하므로 늦가을부터는 실내 따뜻한 곳에서 보호해 주세요.",
        image: "images/plant-18.png",
        scoreMatch: { sunlight: "medium", space: "large", careType: "diligent" }
    },
    {
        name: "개구리밥(워터코인)",
        subtitle: "동글동글 동전잎의 수중요정",
        type: "물 / 풀 (동그란 잎과 수경재배)",
        skill: "수분 정화 (수생 식물의 활력)",
        tags: ["#동전식물", "#수경재배", "#귀여운잎"],
        description: "동글동글한 동전 모양 잎들이 물 위에서 귀엽게 번식하는 식물몬입니다.",
        spot: "어항 위, 물그릇, 밝은 창가",
        caution: "물이 마르지 않도록 항상 촉촉하게 물을 채워주세요.",
        image: "images/plant-19.png",
        scoreMatch: { sunlight: "medium", space: "small", careType: "diligent" }
    },
    {
        name: "파키라",
        subtitle: "이국적인 줄기의 숲속 거인",
        type: "풀 / 땅 (땋은 머리 모양의 단단한 목대)",
        skill: "이산화탄소 강력 포집 (미세먼지 제거)",
        tags: ["#머니트리", "#거실나무", "#초보자가드닝"],
        description: "야자수를 닮은 잎과 굵은 줄기가 안정감을 주는 든든한 식물몬입니다.",
        spot: "거실 소파 옆, 서재 코너",
        caution: "줄기 부분에 물을 저장하므로 과습하지 않도록 겉흙이 마른 후 물을 주세요.",
        image: "images/plant-20.png",
        scoreMatch: { sunlight: "low", space: "large", careType: "easy" }
    }
];

// 2. 12개월 수호 탄생화 데이터베이스
const birthFlowersDB = {
    "1": { icon: "🌼", name: "수선화", meaning: "자기애, 새로운 시작, 고결", desc: "겨울의 추위를 이겨내고 가장 먼저 피어나는 희망의 상징입니다." },
    "2": { icon: "🪻", name: "물망초", meaning: "진실한 사랑, 나를 잊지 마세요", desc: "작고 푸른 꽃잎 속에 깊은 기억과 따뜻한 애정을 품고 있습니다." },
    "3": { icon: "🌼", name: "데이지", meaning: "순수, 평화, 명랑함", desc: "빛을 받으면 활짝 피어나 공간을 밝고 긍정적인 에너지로 채웁니다." },
    "4": { icon: "🌷", name: "튤립", meaning: "사랑의 고백, 매혹, 영원한 애정", desc: "단정하고 수려한 곡선미로 다정한 마음을 전하는 봄의 전령사입니다." },
    "5": { icon: "🔔", name: "은방울꽃", meaning: "다시 찾아온 행복, 순결", desc: "은은하고 고급스러운 향기로 곁에 머무는 이에게 행복을 전합니다." },
    "6": { icon: "🌹", name: "장미", meaning: "열정, 아름다움, 사랑", desc: "화려한 잎과 깊은 향기로 강한 생명력과 매력을 뿜어냅니다." },
    "7": { icon: "🌿", name: "라벤더", meaning: "침묵, 정절, 마음의 평온", desc: "편안한 향기를 발산하여 일상의 피로와 스트레스를 부드럽게 감싸줍니다." },
    "8": { icon: "🌻", name: "해바라기", meaning: "숭배, 기다림, 밝은 미래", desc: "오직 태양만을 바라보며 밝고 활기찬 에너지를 발산합니다." },
    "9": { icon: "🌸", name: "다알리아", meaning: "감사, 우아함, 화려함", desc: "풍성한 꽃잎으로 결실의 계절에 깊은 감사의 마음을 선사합니다." },
    "10": { icon: "🏵️", name: "국화", meaning: "청결, 고결, 진실", desc: "쌀쌀해지는 계절에도 단단한 향기와 의연함을 잃지 않는 강인한 식물입니다." },
    "11": { icon: "🌾", name: "루피너스", meaning: "모성애, 행복, 탐욕 없는 사랑", desc: "위로 곧게 뻗은 꽃대로 주변 환경을 비옥하고 풍요롭게 만듭니다." },
    "12": { icon: "🌺", name: "포인세티아", meaning: "축복, 축하, 행복한 추억", desc: "붉은 잎사귀로 겨울 공간을 따뜻한 온기로 가득 채워줍니다." }
};

// 3. 메인 추천 함수
function recommendPlant() {
    const sunlight = document.getElementById("sunlight").value;
    const space = document.getElementById("space").value;
    const careType = document.getElementById("careType").value;
    const birthMonth = document.getElementById("birthMonth").value;

    // 조건 매칭 점수 계산
    let bestPlant = plantsDB[0];
    let maxScore = -1;

    plantsDB.forEach(plant => {
        let score = 0;
        if (plant.scoreMatch.sunlight === sunlight) score++;
        if (plant.scoreMatch.space === space) score++;
        if (plant.scoreMatch.careType === careType) score++;
        
        if (score > maxScore) {
            maxScore = score;
            bestPlant = plant;
        }
    });

    // 화면에 메인 식물 데이터 렌더링
    document.getElementById("plant-subtitle").innerText = bestPlant.subtitle;
    document.getElementById("plant-name").innerText = bestPlant.name;
    document.getElementById("plant-type").innerText = bestPlant.type;
    document.getElementById("plant-skill").innerText = bestPlant.skill;
    document.getElementById("plant-description").innerText = bestPlant.description;
    document.getElementById("plant-spot").innerText = bestPlant.spot;
    document.getElementById("plant-caution").innerText = bestPlant.caution;
    
    // 캐릭터 이미지 연결
    const imgElement = document.getElementById("plant-image");
    if (bestPlant.image) {
        imgElement.src = bestPlant.image;
        imgElement.alt = bestPlant.name;
    }

    // 태그 렌더링
    const tagsContainer = document.getElementById("plant-tags");
    tagsContainer.innerHTML = "";
    bestPlant.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.innerText = tag;
        tagsContainer.appendChild(span);
    });

    // 메인 식물 구글 이미지 검색 링크 생성
    const affiliateBtn = document.getElementById("plant-affiliate-link");
    const mainPlantQuery = encodeURIComponent(bestPlant.name + " 식물");
    affiliateBtn.href = `https://www.google.com/search?tbm=isch&q=${mainPlantQuery}`;

    // 탄생월 수호 탄생화 정보 및 이미지 검색 링크 생성
    const birthFlower = birthFlowersDB[birthMonth];
    const birthFlowerInfo = document.getElementById("birth-flower-info");
    birthFlowerInfo.innerHTML = `
        <span style="font-size: 20px; vertical-align: middle;">${birthFlower.icon}</span>
        <strong>${birthMonth}월의 탄생화:</strong> <span style="color:#d35400; font-weight:bold;">${birthFlower.name}</span><br>
        <strong>꽃말:</strong> ${birthFlower.meaning}<br>
        <span style="font-size:13px; color:#666;">${birthFlower.desc}</span>
    `;

    const birthFlowerLink = document.getElementById("birth-flower-link");
    const birthFlowerQuery = encodeURIComponent(birthFlower.name + " 꽃");
    birthFlowerLink.href = `https://www.google.com/search?tbm=isch&q=${birthFlowerQuery}`;

    // 서브 추천 목록
    const subList = document.getElementById("sub-plants-list");
    subList.innerHTML = "";
    plantsDB.filter(p => p.name !== bestPlant.name).slice(0, 3).forEach(subPlant => {
        const li = document.createElement("li");
        li.innerText = `${subPlant.name} (속성: ${subPlant.type.split('/')[0].trim()})`;
        subList.appendChild(li);
    });

    // 결과 화면 노출 및 스크롤
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

// 4. 아코디언 토글
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// 5. 공유 기능
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

// 6. 결과 이미지 저장
function downloadResult() {
    const card = document.getElementById("animation-card");
    html2canvas(card, { backgroundColor: "#f8f8d8" }).then(canvas => {
        const link = document.createElement("a");
        link.download = "my_plant_dex.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}