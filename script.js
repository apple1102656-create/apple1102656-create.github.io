// v2.7 식물 데이터베이스 (총 20개 식물 완벽 확장)
const plantDatabase = [
    // --- [기존 식물 1~10번] ---
    {
        name: "인도고무나무 (Rubber Plant)",
        subtitle: "묵묵히 당신의 공간을 지켜주는 듬직한 보디가드",
        tags: ["#미세먼지청소기", "#듬직한매력", "#공기정화1등"],
        spot: "거실 창가, 햇빛이 잘 드는 사무실 입구",
        caution: "잎에 쌓인 먼지를 젖은 수건으로 가끔 닦아주세요.",
        link: "https://www.google.com/search?q=인도고무나무+화분+구매",
        sunlight: "high",
        airQuality: "high",
        space: "large",
        pollution: "high",
        careType: "easy",
        mood: "healing",
        description: "넓은 잎으로 미세먼지와 실내 유해물질을 묵묵히 흡수하는 고마운 식물입니다. 관리가 비교적 쉽고 듬직한 모습으로 지친 일상에 편안한 힐링을 줍니다."
    },
    {
        name: "틸란드시아 (Tillandsia)",
        subtitle: "흙 없이도 가볍게, 자유로운 영혼의 공중 식물",
        tags: ["#흙없이자라요", "#책상위힐링", "#귀차니즘추천"],
        spot: "책상 위 모니터 옆, 창가 매달이(행잉) 장식",
        caution: "일주일에 한 번 30분 동안 물에 푹 담갔다가 잘 말려주세요.",
        link: "https://www.google.com/search?q=틸란드시아+행잉+구매",
        sunlight: "medium",
        airQuality: "high",
        space: "small",
        pollution: "high",
        careType: "easy",
        mood: "interior",
        description: "흙 없이 공기 중의 수분과 먼지를 먹고 자랍니다. 화분이 필요 없어 책상 위나 선반 어디든 감각적으로 배치할 수 있습니다."
    },
    {
        name: "스킨답서스 (Pothos)",
        subtitle: "어떤 환경에서도 곁을 지켜주는 강인한 생명력",
        tags: ["#초보자만능식물", "#그늘에서도쑥쑥", "#주방공기정화"],
        spot: "빛이 적은 방 안쪽, 가스레인지와 가까운 주방",
        caution: "성장 속도가 빠르니 가지가 길어지면 살짝 잘라주세요.",
        link: "https://www.google.com/search?q=스킨답서스+수경재배+구매",
        sunlight: "low",
        airQuality: "high",
        space: "small",
        pollution: "low",
        careType: "easy",
        mood: "healing",
        description: "빛이 적은 북향이나 실내 안쪽에서도 절대 쉽게 죽지 않는 초보자 필수 식물입니다. 일산화탄소 제거 능력이 탁월해 실내 환경을 맑게 해줍니다."
    },
    {
        name: "아레카 야자 (Areca Palm)",
        subtitle: "집 안을 싱그러운 휴양지로 만들어주는 천연 가습기",
        tags: ["#천연가습기", "#거실의주인공", "#휴양지감성"],
        spot: "넓은 거실 소파 옆, 채광이 좋은 베란다 안쪽",
        caution: "건조하면 잎 끝이 갈색으로 변할 수 있으니 분무기로 물을 뿌려주세요.",
        link: "https://www.google.com/search?q=아레카야자+대형화분+구매",
        sunlight: "high",
        airQuality: "high",
        space: "large",
        pollution: "low",
        careType: "diligent",
        mood: "interior",
        description: "하루 종일 수분을 뿜어내는 천연 가습 식물입니다. 풍성하게 뻗은 이국적인 잎사귀가 집안이나 사무실을 생기 넘치는 휴양지처럼 꾸며줍니다."
    },
    {
        name: "몬스테라 (Monstera)",
        subtitle: "트렌디한 잎사귀로 완성하는 감각적인 플랜테리어",
        tags: ["#플랜테리어대명사", "#인스타감성", "#성취감최고"],
        spot: "동향 창가, 침실이나 거실의 감성 코너",
        caution: "직사광선에 잎이 탈 수 있으니 부드러운 간접광에서 키워주세요.",
        link: "https://www.google.com/search?q=몬스테라+화분+구매",
        sunlight: "medium",
        airQuality: "normal",
        space: "large",
        pollution: "low",
        careType: "diligent",
        mood: "interior",
        description: "잎이 독특하게 갈라지는 매력적인 비주얼로 홈스타일링 최고의 인기를 자랑합니다. 새잎이 날 때마다 키우는 기쁨과 재미를 안겨줍니다."
    },
    {
        name: "산세베리아 (Sansevieria)",
        subtitle: "잠든 사이 맑은 산소를 내뿜는 침실의 수호천사",
        tags: ["#밤에산소배출", "#한달에한번물주기", "#숙면도우미"],
        spot: "침실 머리맡, 좁은 방 책상 옆",
        caution: "물을 너무 자주 주면 뿌리가 썩으니 과습에 절대 주의하세요.",
        link: "https://www.google.com/search?q=산세베리아+화분+구매",
        sunlight: "low",
        airQuality: "normal",
        space: "small",
        pollution: "high",
        careType: "easy",
        mood: "healing",
        description: "밤에 산소를 내뿜어 침실이나 좁은 공간에 두기 완벽합니다. 물을 자주 주지 않아도 끄떡없이 자라 바쁜 현대인에게 최고의 친구입니다."
    },
    {
        name: "파키라 (Pachira)",
        subtitle: "행운과 금전운을 불러오는 부드러운 그린 인테리어",
        tags: ["#머니트리", "#개업선물1위", "#이산화탄소제거"],
        spot: "거실 TV 옆, 현관 입구 쪽 간접광 공간",
        caution: "줄기에 수분을 저장하므로 흙이 안쪽까지 푹 말랐을 때 물을 주세요.",
        link: "https://www.google.com/search?q=파키라+화분+구매",
        sunlight: "medium",
        airQuality: "high",
        space: "large",
        pollution: "low",
        careType: "easy",
        mood: "interior",
        description: "해외에서 'Money Tree(돈나무)'로 불리며 긍정적인 기운을 주는 식물입니다. 실내 이산화탄소 제거 능력이 탁월하며 목대가 굵어 고급스러운 느낌을 줍니다."
    },
    {
        name: "스파티필럼 (Peace Lily)",
        subtitle: "우아한 하얀 꽃과 함께 실내 화학물질을 잡는 정화 왕",
        tags: ["#우아한백색꽃", "#벤젠제거", "#물부족알리미"],
        spot: "침실 안쪽 창가, 주방 테이블 한켠",
        caution: "물이 부족하면 잎을 아래로 축 늘어뜨려 신호를 주니 그때 물을 흠뻑 주세요.",
        link: "https://www.google.com/search?q=스파티필럼+화분+구매",
        sunlight: "low",
        airQuality: "high",
        space: "small",
        pollution: "high",
        careType: "diligent",
        mood: "healing",
        description: "실내에서도 아름다운 하얀색 꽃(불염포)을 피우는 우아한 식물입니다. 아세톤, 벤젠 등 실내 유해 화학물질을 흡수하는 능력이 가장 뛰어난 꽃식물입니다."
    },
    {
        name: "유칼립투스 (Eucalyptus)",
        subtitle: "상쾌한 자연의 향기로 머리를 맑게 해주는 허브",
        tags: ["#상쾌한허브향", "#비염도우미", "#감성소품"],
        spot: "햇빛과 바람이 가장 잘 통하는 베란다, 창문 바로 앞",
        caution: "햇빛과 물을 매우 좋아하므로 겉흙이 마르면 바로 물을 줘야 합니다.",
        link: "https://www.google.com/search?q=유칼립투스+화분+구매",
        sunlight: "high",
        airQuality: "normal",
        space: "small",
        pollution: "low",
        careType: "diligent",
        mood: "healing",
        description: "잎을 스치면 은은하고 상쾌한 향기가 나며 비염이나 호흡기 안정에 도움을 줍니다. 동전 모양의 귀여운 잎이 감성적인 인테리어 소품으로 완벽합니다."
    },
    {
        name: "스투키 (Stuckyi)",
        subtitle: "신경 쓰지 않아도 꿋꿋이 자라는 극강의 생존력",
        tags: ["#전자파차단", "#물주기한달반", "#모던인테리어"],
        spot: "사무실 컴퓨터 모니터 옆, 침실 사이드 테이블",
        caution: "겨울철에는 물을 거의 주지 않아도 괜찮으니 절대 자주 물을 주지 마세요.",
        link: "https://www.google.com/search?q=스투키+화분+구매",
        sunlight: "low",
        airQuality: "normal",
        space: "small",
        pollution: "high",
        careType: "easy",
        mood: "interior",
        description: "오동통하고 직선으로 뻗은 모양이 모던하며 관리가 세상에서 가장 쉬운 식물 중 하나입니다. 음이온을 방출하고 밤에 산소를 내보내 바쁜 분들께 강력 추천합니다."
    },

    // --- [v2.7 추가 식물 11~20번] ---
    {
        name: "여인초 (Ravenala)",
        subtitle: "시원하게 뻗은 거대한 잎사귀로 완성하는 거실 정원",
        tags: ["#거실인테리어끝판왕", "#이국적인무드", "#대형화분"],
        spot: "채광이 부드럽게 들어오는 거실 소파 옆이나 넓은 베란다",
        caution: "잎이 얇아 직사광선이나 건조한 바람에 탈 수 있으니 주의해 주세요.",
        link: "https://www.google.com/search?q=여인초+대형화분+구매",
        sunlight: "medium",
        airQuality: "high",
        space: "large",
        pollution: "low",
        careType: "easy",
        mood: "interior",
        description: "바나나 잎처럼 크고 우아한 잎사귀가 공간을 단숨에 고급스러운 식물원처럼 바꿔줍니다. 넓은 실내 환경의 가습 효과에도 큰 도움을 줍니다."
    },
    {
        name: "금전수 (Zamioculcas)",
        subtitle: "동전 모양 잎사귀에 부와 행운을 담은 돈나무",
        tags: ["#돈나무", "#집들이선물1위", "#극강의생명력"],
        spot: "빛이 적게 드는 현관 입구, 사무실 복도나 거실 모퉁이",
        caution: "뿌리와 알뿌리에 물을 저장하므로 한 달에 한 번만 물을 주세요.",
        link: "https://www.google.com/search?q=금전수+화분+구매",
        sunlight: "low",
        airQuality: "normal",
        space: "large",
        pollution: "low",
        careType: "easy",
        mood: "interior",
        description: "도톰하고 반짝이는 잎이 엽전을 엮은 모습과 같아 '돈이 들어오는 식물'로 불립니다. 그늘과 건조함에 매우 강해 초보자가 키우기 최고의 조건입니다."
    },
    {
        name: "테이블야자 (Chamaedorea)",
        subtitle: "작은 책상 위에서 즐기는 아담하고 풍성한 야자수",
        tags: ["#책상위야자수", "#화학물질흡수", "#초보집사추천"],
        spot: "사무실 책상, 공부방 창가, 간접광이 드는 테이블",
        caution: "강한 직사광선을 받으면 잎이 노랗게 변하므로 은은한 빛에서 키워주세요.",
        link: "https://www.google.com/search?q=테이블야자+화분+구매",
        sunlight: "low",
        airQuality: "high",
        space: "small",
        pollution: "high",
        careType: "easy",
        mood: "healing",
        description: "작고 아담한 크기로 책상이나 협탁 위에 가볍게 올려두기 좋은 미니 야자수입니다. 페인트나 접착제에서 나오는 유해 화학물질 정화 능력이 뛰어납니다."
    },
    {
        name: "호접란 (Phalaenopsis)",
        subtitle: "나비가 춤추듯 우아하고 화려한 꽃을 피우는 난초",
        tags: ["#화려한꽃", "#고급선물", "#밤에산소배출"],
        spot: "동향 창가, 환기가 잘 되고 빛이 은은한 거실 장식장",
        caution: "꽃이나 잎 가운데에 물이 고이지 않도록 뿌리 쪽 바닥에만 물을 주세요.",
        link: "https://www.google.com/search?q=호접란+화분+구매",
        sunlight: "medium",
        airQuality: "normal",
        space: "small",
        pollution: "low",
        careType: "diligent",
        mood: "interior",
        description: "마치 나비가 날개를 편 듯한 우아한 꽃이 수개월 동안 지속되어 눈을 즐겁게 합니다. 밤에 탄소 화합물을 정화하고 산소를 방출해 실내에 아주 유익합니다."
    },
    {
        name: "필로덴드론 (Philodendron)",
        subtitle: "하트 모양 잎사귀가 넝쿨을 이루는 싱그러운 감성",
        tags: ["#하트잎사귀", "#행잉플랜트", "#음이온방출"],
        spot: "선반 위 높은 곳, 간접광이 드는 침실 벽면",
        caution: "줄기가 길게 아래로 늘어지며 자라므로 높은 곳에 두거나 지지대를 세워주세요.",
        link: "https://www.google.com/search?q=필로덴드론+화분+구매",
        sunlight: "medium",
        airQuality: "high",
        space: "small",
        pollution: "low",
        careType: "easy",
        mood: "interior",
        description: "윤기가 흐르는 예쁜 하트 모양의 잎이 넝쿨처럼 뻗어나가는 멋진 식물입니다. 실내 공기 중 유해물질 흡수 속도가 빠르고 생명력이 매우 강합니다."
    },
    {
        name: "칼라만시 오렌지 (Calamondin)",
        subtitle: "하얀 꽃의 향기와 열매 수확의 기쁨을 주는 실내 유실수",
        tags: ["#미니오렌지나무", "#열매수확", "#상쾌한향기"],
        spot: "햇빛이 가장 길고 강하게 들어오는 남향 베란다나 큰 창가",
        caution: "열매와 꽃을 피우기 위해 많은 빛과 물이 필요하니 흙 겉면이 마르면 물을 흠뻑 주세요.",
        link: "https://www.google.com/search?q=칼라만시+화분+구매",
        sunlight: "high",
        airQuality: "normal",
        space: "large",
        pollution: "low",
        careType: "diligent",
        mood: "healing",
        description: "실내에서도 향기로운 꽃을 피우고 귀여운 오렌지색 열매를 맺는 유실수입니다. 키우는 재미와 정서적 안정감, 풍성한 볼거리를 동시에 제공합니다."
    },
    {
        name: "장미허브 (Plectranthus)",
        subtitle: "잎을 톡톡 건드리면 달콤한 애플민트 향기가 솔솔",
        tags: ["#달콤한향기", "#아기자기한모양", "#천연방향제"],
        spot: "햇빛과 바람이 잘 통하는 창가 바로 앞, 밝은 책상",
        caution: "과습에 약하니 다육식물처럼 흙 속까지 바짝 말랐을 때 물을 챙겨주세요.",
        link: "https://www.google.com/search?q=장미허브+화분+구매",
        sunlight: "high",
        airQuality: "normal",
        space: "small",
        pollution: "low",
        careType: "easy",
        mood: "healing",
        description: "작은 장미꽃을 닮은 도톰한 잎사귀를 스치면 기분을 아주 상쾌하게 만드는 달콤한 향기가 퍼집니다. 스트레스 완화에 최고의 반려 허브입니다."
    },
    {
        name: "아스파라거스 고사리 (Asparagus Fern)",
        subtitle: "안개 속을 걷는 듯한 몽환적이고 가벼운 깃털 잎사귀",
        tags: ["#몽환적무드", "#실내습도조절", "#감성플랜테리어"],
        spot: "은은한 간접광이 드는 선반, 화장실이나 주방 창가",
        caution: "공기가 건조하면 잎이 후드득 떨어질 수 있으니 잎 주변에 분무기로 물을 뿌려주세요.",
        link: "https://www.google.com/search?q=아스파라거스고사리+화분+구매",
        sunlight: "medium",
        airQuality: "high",
        space: "small",
        pollution: "low",
        careType: "diligent",
        mood: "interior",
        description: "부드럽고 솜털 같은 초록빛 잎사귀가 공간에 가볍고 신비로운 감성을 더해줍니다. 습도를 좋아해 실내 자연 습도 조절에도 훌륭한 역할을 합니다."
    },
    {
        name: "페페로미아 옵투시폴리아 (Baby Rubber Plant)",
        subtitle: "동글동글하고 반짝이는 잎사귀가 사랑스러운 미니 화분",
        tags: ["#동글동글잎사귀", "#반려동물안전", "#초미니화분"],
        spot: "작은 책상 위, 식탁 한가운데, 욕실 선반",
        caution: "잎에 물을 저장하는 성질이 있으므로 겉흙이 마르고 2~3일 뒤에 물을 주세요.",
        link: "https://www.google.com/search?q=페페로미아+화분+구매",
        sunlight: "low",
        airQuality: "normal",
        space: "small",
        pollution: "low",
        careType: "easy",
        mood: "healing",
        description: "동글동글하고 광택이 나는 귀여운 잎을 가진 아담한 식물입니다. 고양이나 강아지 등 반려동물에게 무해(Non-toxic)하여 안심하고 어디든 둘 수 있습니다."
    },
    {
        name: "홍콩야자 (Schefflera)",
        subtitle: "우산처럼 펼쳐진 잎사귀가 미세먼지를 잡는 천연 공기청정기",
        tags: ["#우산모양잎", "#간접흡연정화", "#강인한생명력"],
        spot: "사무실 창가, 냄새나 외부 오염이 걱정되는 거실이나 창문 옆",
        caution: "통풍이 부족하면 벌레가 생길 수 있으니 가끔 창문을 열어 바람을 쐬어주세요.",
        link: "https://www.google.com/search?q=홍콩야자+화분+구매",
        sunlight: "medium",
        airQuality: "high",
        space: "small",
        pollution: "high",
        careType: "easy",
        mood: "healing",
        description: "작은 우산을 펴놓은 듯 귀여운 잎사귀들이 모여 자라나는 매력적인 식물입니다. 특히 공기 중 미세먼지와 화학 연기 정화 능력이 뛰어납니다."
    }
];

// 추천 계산 알고리즘 함수
function recommendPlant() {
    const userInputs = {
        sunlight: document.getElementById("sunlight").value,
        airQuality: document.getElementById("airQuality").value,
        space: document.getElementById("space").value,
        location: document.getElementById("location").value,
        pollution: document.getElementById("pollution").value,
        careType: document.getElementById("careType").value,
        mood: document.getElementById("mood").value
    };

    // 각 식물의 점수 계산 (+10~15점 누적)
    plantDatabase.forEach(plant => {
        let score = 0;
        if (plant.sunlight === userInputs.sunlight) score += 10;
        if (plant.airQuality === userInputs.airQuality) score += 10;
        if (plant.space === userInputs.space) score += 10;
        if (plant.pollution === userInputs.pollution) score += 10;
        if (plant.careType === userInputs.careType) score += 15;
        if (plant.mood === userInputs.mood) score += 15;
        plant.score = score;
    });

    // 높은 점수 순서대로 정렬 (1위부터 20위까지 줄세우기)
    plantDatabase.sort((a, b) => b.score - a.score);
    const bestPlant = plantDatabase[0];

    // 결과 텍스트 적용
    document.getElementById("plant-subtitle").innerText = bestPlant.subtitle;
    document.getElementById("plant-name").innerText = bestPlant.name;
    document.getElementById("plant-description").innerText = bestPlant.description;
    document.getElementById("plant-spot").innerText = bestPlant.spot;
    document.getElementById("plant-caution").innerText = bestPlant.caution;
    
    // 제휴 링크 설정
    const affiliateBtn = document.getElementById("plant-affiliate-link");
    affiliateBtn.href = bestPlant.link;

    // 해시태그 뱃지 생성
    const tagsContainer = document.getElementById("plant-tags");
    tagsContainer.innerHTML = ""; 
    bestPlant.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag-badge";
        span.innerText = tag;
        tagsContainer.appendChild(span);
    });

    // 2위, 3위 대안 식물 출력
    const subListContainer = document.getElementById("sub-plants-list");
    subListContainer.innerHTML = ""; 
    for (let i = 1; i <= 2; i++) {
        const subPlant = plantDatabase[i];
        const li = document.createElement("li");
        li.innerHTML = `<strong>${subPlant.name}</strong> - ${subPlant.subtitle}`;
        subListContainer.appendChild(li);
    }
    
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

// SNS 공유 API 함수
function shareResult() {
    const plantName = document.getElementById("plant-name").innerText;
    const shareTitle = "나만의 맞춤 반려식물 찾기 결과";
    const shareText = `나의 운명적인 반려식물은 [${plantName}] 입니다! 내 공간에 딱 맞는 식물을 추천받아 보세요.`;
    const shareUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: shareTitle,
            text: shareText,
            url: shareUrl
        }).catch((error) => console.log('공유 취소 또는 오류:', error));
    } else {
        navigator.clipboard.writeText(`${shareText}\n${shareUrl}`).then(() => {
            alert("테스트 결과와 링크가 클립보드에 복사되었습니다! 원하는 곳에 붙여넣기(Ctrl+V) 하여 공유해 보세요.");
        });
    }
}

// 하단 칼럼 아코디언 토글 함수
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}