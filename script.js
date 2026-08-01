const plantDatabase = [
    {
        name: "인도고무나무", nickname: "듬직한 먼지먹깨비", type: "어둠 / 바위 (그늘에서도 단단함)", skill: "미세먼지 흡수 (공기 오염도 방어력 상승)",
        image: "images/plant-1.png", subtitle: "묵묵히 당신의 공간을 지켜주는 듬직한 파트너", tags: ["#미세먼지청소기", "#듬직한매력", "#공기정화1등"],
        spot: "거실 창가, 햇빛이 잘 드는 현관 입구", caution: "잎에 쌓인 먼지를 젖은 수건으로 가끔 닦아주세요.", link: "https://www.google.com/search?q=인도고무나무+화분+구매",
        sunlight: "high", airQuality: "high", space: "large", pollution: "high", careType: "easy", mood: "healing",
        description: "넓은 잎으로 실내 공간의 미세먼지와 유해물질을 묵묵히 흡수하는 고마운 식물몬입니다."
    },
    {
        name: "틸란드시아", nickname: "자유로운 공중부양자", type: "비행 / 풀 (흙 없이 공중에서 생존)", skill: "공중 수분 흡수 (습도 조절)",
        image: "images/plant-2.png", subtitle: "흙 없이도 가볍게, 자유로운 영혼의 공중 식물", tags: ["#흙없이자라요", "#책상위힐링", "#귀차니즘추천"],
        spot: "책상 위 모니터 옆, 창가 매달이(행잉) 장식", caution: "일주일에 한 번 30분 동안 물에 푹 담갔다가 잘 말려주세요.", link: "https://www.google.com/search?q=틸란드시아+행잉+구매",
        sunlight: "medium", airQuality: "high", space: "small", pollution: "high", careType: "easy", mood: "interior",
        description: "흙 없이 공기 중의 수분과 먼지를 먹고 자랍니다. 화분이 필요 없어 어디든 배치할 수 있는 유연한 파트너입니다."
    },
    {
        name: "스킨답서스", nickname: "생명력의 화신", type: "독 / 풀 (일산화탄소 흡수력 최강)", skill: "독소 정화 (주방 가스 완벽 제거)",
        image: "images/plant-3.png", subtitle: "어떤 환경에서도 곁을 지켜주는 강인한 생명력", tags: ["#초보자만능", "#그늘에서도쑥쑥", "#주방공기정화"],
        spot: "빛이 적은 방 안쪽, 가스레인지와 가까운 주방", caution: "성장 속도가 빠르니 가지가 길어지면 살짝 잘라주세요.", link: "https://www.google.com/search?q=스킨답서스+수경재배+구매",
        sunlight: "low", airQuality: "high", space: "small", pollution: "low", careType: "easy", mood: "healing",
        description: "빛이 적은 북향 방에서도 절대 쉽게 기절하지 않는 초보 트레이너용 필수 식물몬입니다."
    },
    {
        name: "아레카 야자", nickname: "휴양지 메이커", type: "물 / 풀 (천연 가습기)", skill: "물 뿜기 (하루 1리터 수분 방출)",
        image: "images/plant-4.png", subtitle: "집 안을 싱그러운 휴양지로 만들어주는 천연 가습기", tags: ["#천연가습기", "#거실의주인공", "#휴양지감성"],
        spot: "넓은 거실 소파 옆, 채광이 좋은 베란다 안쪽", caution: "건조하면 잎 끝이 갈색으로 변할 수 있으니 분무기로 물을 뿌려주세요.", link: "https://www.google.com/search?q=아레카야자+대형화분+구매",
        sunlight: "high", airQuality: "high", space: "large", pollution: "low", careType: "diligent", mood: "interior",
        description: "하루 종일 수분을 뿜어내는 천연 가습 스킬을 가진 대형 식물몬입니다."
    },
    {
        name: "몬스테라", nickname: "찢잎의 요정", type: "풀 / 에스퍼 (감각적인 플랜테리어)", skill: "시선 집중 (공간 매력도 +100)",
        image: "images/plant-5.png", subtitle: "트렌디한 잎사귀로 완성하는 감각적인 플랜테리어", tags: ["#플랜테리어", "#인스타감성", "#성취감최고"],
        spot: "동향 창가, 침실이나 거실의 감성 코너", caution: "직사광선에 잎이 탈 수 있으니 부드러운 간접광에서 키워주세요.", link: "https://www.google.com/search?q=몬스테라+화분+구매",
        sunlight: "medium", airQuality: "normal", space: "large", pollution: "low", careType: "diligent", mood: "interior",
        description: "잎이 갈라지며 진화하는 매력적인 비주얼로 홈스타일링 도감 최고의 인기를 자랑합니다."
    },
    {
        name: "산세베리아", nickname: "침실의 수호천사", type: "빛 / 강철 (음이온 방출 및 극강의 방어력)", skill: "달빛 정화 (밤에 산소 방출)",
        image: "images/plant-6.png", subtitle: "잠든 사이 맑은 산소를 내뿜는 침실의 수호천사", tags: ["#밤에산소배출", "#물주기한달", "#숙면도우미"],
        spot: "침실 머리맡, 좁은 방 책상 옆", caution: "물을 너무 자주 주면 뿌리가 썩으니 과습에 절대 주의하세요.", link: "https://www.google.com/search?q=산세베리아+화분+구매",
        sunlight: "low", airQuality: "normal", space: "small", pollution: "high", careType: "easy", mood: "healing",
        description: "밤에 산소를 내뿜어 침실이나 좁은 공간에 두기 완벽한 수호천사 같은 반려식물입니다."
    },
    {
        name: "파키라", nickname: "머니 트리", type: "풀 / 금전 (행운을 부르는 속성)", skill: "럭키 코인 (금전운 상승 버프)",
        image: "images/plant-7.png", subtitle: "행운과 금전운을 불러오는 부드러운 그린 인테리어", tags: ["#머니트리", "#개업선물1위", "#이산화탄소제거"],
        spot: "거실 TV 옆, 현관 입구 쪽 간접광 공간", caution: "줄기에 수분을 저장하므로 흙이 안쪽까지 푹 말랐을 때 물을 주세요.", link: "https://www.google.com/search?q=파키라+화분+구매",
        sunlight: "medium", airQuality: "high", space: "large", pollution: "low", careType: "easy", mood: "interior",
        description: "해외에서 'Money Tree'로 불리며 트레이너에게 긍정적인 기운과 행운을 가져다줍니다."
    },
    {
        name: "스파티필럼", nickname: "백색의 정화자", type: "풀 / 페어리 (하얀 꽃과 공기 정화)", skill: "상태이상 회복 (벤젠, 폼알데하이드 제거)",
        image: "images/plant-8.png", subtitle: "우아한 하얀 꽃과 함께 실내 화학물질을 잡는 정화 왕", tags: ["#우아한백색꽃", "#독소제거", "#물부족알리미"],
        spot: "침실 안쪽 창가, 주방 테이블 한켠", caution: "물이 부족하면 잎을 아래로 축 늘어뜨려 신호를 주니 그때 물을 흠뻑 주세요.", link: "https://www.google.com/search?q=스파티필럼+화분+구매",
        sunlight: "low", airQuality: "high", space: "small", pollution: "high", careType: "diligent", mood: "healing",
        description: "실내에서도 아름다운 하얀색 꽃(불염포)을 피우며 유해 화학물질을 흡수하는 능력이 뛰어납니다."
    },
    {
        name: "유칼립투스", nickname: "코뻥 허브", type: "바람 / 풀 (상쾌한 허브향)", skill: "아로마 테라피 (비염 완화 및 스트레스 감소)",
        image: "images/plant-9.png", subtitle: "상쾌한 자연의 향기로 머리를 맑게 해주는 허브", tags: ["#상쾌한허브향", "#비염도우미", "#감성소품"],
        spot: "햇빛과 바람이 가장 잘 통하는 베란다, 창문 바로 앞", caution: "햇빛과 물을 매우 좋아하므로 겉흙이 마르면 바로 물을 줘야 합니다.", link: "https://www.google.com/search?q=유칼립투스+화분+구매",
        sunlight: "high", airQuality: "normal", space: "small", pollution: "low", careType: "diligent", mood: "healing",
        description: "잎을 스치면 상쾌한 향기가 나며 호흡기 안정(상태이상 회복)에 도움을 주는 허브형 몬스터입니다."
    },
    {
        name: "스투키", nickname: "가시방패", type: "바위 / 강철 (생존력 최상위)", skill: "철벽 방어 (전자파 차단 및 음이온 방출)",
        image: "images/plant-10.png", subtitle: "신경 쓰지 않아도 꿋꿋이 자라는 극강의 생존력", tags: ["#전자파차단", "#물주기한달반", "#모던인테리어"],
        spot: "사무실 컴퓨터 모니터 옆, 침실 사이드 테이블", caution: "겨울철에는 물을 거의 주지 않아도 괜찮으니 절대 자주 주지 마세요.", link: "https://www.google.com/search?q=스투키+화분+구매",
        sunlight: "low", airQuality: "normal", space: "small", pollution: "high", careType: "easy", mood: "interior",
        description: "직선으로 뻗은 모양이 모던하며 방치형 트레이너에게 가장 알맞은 강인한 파트너입니다."
    },
    {
        name: "여인초", nickname: "거실의 지배자", type: "풀 / 거대 (거대한 잎사귀)", skill: "광역 가습 (넓은 잎으로 수분 증발)",
        image: "images/plant-11.png", subtitle: "시원하게 뻗은 거대한 잎사귀로 완성하는 거실 정원", tags: ["#거실인테리어끝판왕", "#이국적인무드", "#대형화분"],
        spot: "채광이 부드럽게 들어오는 거실 소파 옆이나 넓은 베란다", caution: "잎이 얇아 직사광선이나 건조한 바람에 탈 수 있으니 주의해 주세요.", link: "https://www.google.com/search?q=여인초+대형화분+구매",
        sunlight: "medium", airQuality: "high", space: "large", pollution: "low", careType: "easy", mood: "interior",
        description: "바나나 잎처럼 크고 우아한 잎사귀가 실내 공간을 단숨에 밀림으로 바꿔주는 대형 식물몬입니다."
    },
    {
        name: "금전수", nickname: "골드 코인", type: "땅 / 금전 (건조함에 강함)", skill: "일확천금 (돈이 들어온다는 소문)",
        image: "images/plant-12.png", subtitle: "동전 모양 잎사귀에 부와 행운을 담은 돈나무", tags: ["#돈나무", "#집들이선물1위", "#극강의생명력"],
        spot: "빛이 적게 드는 현관 입구, 사무실 복도나 거실 모퉁이", caution: "뿌리와 알뿌리에 물을 저장하므로 한 달에 한 번만 물을 주세요.", link: "https://www.google.com/search?q=금전수+화분+구매",
        sunlight: "low", airQuality: "normal", space: "large", pollution: "low", careType: "easy", mood: "interior",
        description: "반짝이는 잎이 엽전을 닮아 부유함을 상징하며, 빛이 적은 곳에서도 아주 잘 견딥니다."
    },
    {
        name: "테이블야자", nickname: "책상 위 미니미", type: "풀 / 물 (아담한 크기와 공기정화)", skill: "초소형 정화 (암모니아 흡수)",
        image: "images/plant-13.png", subtitle: "작은 책상 위에서 즐기는 아담하고 풍성한 야자수", tags: ["#책상위야자수", "#화학물질흡수", "#초보집사추천"],
        spot: "사무실 책상, 공부방 창가, 간접광이 드는 테이블", caution: "강한 직사광선을 받으면 잎이 노랗게 변하므로 은은한 빛에서 키워주세요.", link: "https://www.google.com/search?q=테이블야자+화분+구매",
        sunlight: "low", airQuality: "high", space: "small", pollution: "high", careType: "easy", mood: "healing",
        description: "작고 아담한 크기로 책상 위에 가볍게 올려두기 좋은 미니 식물몬입니다."
    },
    {
        name: "호접란", nickname: "나비무희", type: "풀 / 비행 (나비 모양의 꽃)", skill: "우아한 날갯짓 (장기간 개화 상태 유지)",
        image: "images/plant-14.png", subtitle: "나비가 춤추듯 우아하고 화려한 꽃을 피우는 난초", tags: ["#화려한꽃", "#고급선물", "#밤에산소배출"],
        spot: "동향 창가, 환기가 잘 되고 빛이 은은한 거실 장식장", caution: "꽃이나 잎 가운데에 물이 고이지 않도록 뿌리 쪽 바닥에만 물을 주세요.", link: "https://www.google.com/search?q=호접란+화분+구매",
        sunlight: "medium", airQuality: "normal", space: "small", pollution: "low", careType: "diligent", mood: "interior",
        description: "나비가 날개를 편 듯한 화려한 꽃을 피워 트레이너의 눈을 즐겁게 해줍니다."
    },
    {
        name: "필로덴드론", nickname: "하트 넝쿨", type: "풀 / 독 (공기 정화와 넝쿨)", skill: "하트 빔 (사랑스러운 잎 모양으로 힐링)",
        image: "images/plant-15.png", subtitle: "하트 모양 잎사귀가 넝쿨을 이루는 싱그러운 감성", tags: ["#하트잎사귀", "#행잉플랜트", "#음이온방출"],
        spot: "선반 위 높은 곳, 간접광이 드는 침실 벽면", caution: "줄기가 길게 늘어지며 자라므로 높은 곳에 배치해 주세요.", link: "https://www.google.com/search?q=필로덴드론+화분+구매",
        sunlight: "medium", airQuality: "high", space: "small", pollution: "low", careType: "easy", mood: "interior",
        description: "하트 모양의 잎이 넝쿨처럼 뻗어나가는 매력적인 비주얼을 자랑합니다."
    },
    {
        name: "칼라만시 오렌지", nickname: "비타민 볼", type: "풀 / 불 (따뜻한 햇살 선호)", skill: "비타민 충전 (달콤상큼한 열매 생성)",
        image: "images/plant-16.png", subtitle: "하얀 꽃의 향기와 열매 수확의 기쁨을 주는 실내 유실수", tags: ["#미니오렌지나무", "#열매수확", "#상쾌한향기"],
        spot: "햇빛이 가장 길고 강하게 들어오는 남향 베란다나 큰 창가", caution: "열매와 꽃을 피우기 위해 많은 빛과 물이 필요합니다.", link: "https://www.google.com/search?q=칼라만시+화분+구매",
        sunlight: "high", airQuality: "normal", space: "large", pollution: "low", careType: "diligent", mood: "healing",
        description: "실내에서도 향기로운 꽃과 귀여운 오렌지색 열매를 맺는 유실수형 몬스터입니다."
    },
    {
        name: "장미허브", nickname: "스윗 애플민트", type: "풀 / 페어리 (달콤한 향기)", skill: "향기 뿜기 (애플민트 향으로 기분 전환)",
        image: "images/plant-17.png", subtitle: "잎을 톡톡 건드리면 달콤한 애플민트 향기가 솔솔", tags: ["#달콤한향기", "#아기자기한모양", "#천연방향제"],
        spot: "햇빛과 바람이 잘 통하는 창가 바로 앞, 밝은 책상", caution: "과습에 약하니 다육식물처럼 흙 속까지 바짝 말랐을 때 물을 주세요.", link: "https://www.google.com/search?q=장미허브+화분+구매",
        sunlight: "high", airQuality: "normal", space: "small", pollution: "low", careType: "easy", mood: "healing",
        description: "잎을 스치면 기분을 아주 상쾌하게 만드는 달콤한 향기가 퍼지는 반려 허브입니다."
    },
    {
        name: "아스파라거스 고사리", nickname: "포그 깃털", type: "풀 / 물 (습기를 좋아하는 고사리류)", skill: "안개 생성 (몽환적 무드 연출)",
        image: "images/plant-18.png", subtitle: "안개 속을 걷는 듯한 몽환적이고 가벼운 깃털 잎사귀", tags: ["#몽환적무드", "#실내습도조절", "#감성플랜테리어"],
        spot: "은은한 간접광이 드는 선반, 화장실이나 주방 창가", caution: "공기가 건조하면 잎이 떨어질 수 있으니 잎 주변에 분무기로 물을 뿌려주세요.", link: "https://www.google.com/search?q=아스파라거스고사리+화분+구매",
        sunlight: "medium", airQuality: "high", space: "small", pollution: "low", careType: "diligent", mood: "interior",
        description: "부드럽고 솜털 같은 잎사귀가 공간에 신비로운 감성을 더해줍니다."
    },
    {
        name: "페페로미아", nickname: "동글 미니미", type: "풀 / 바위 (도톰한 잎사귀 수분 저장)", skill: "맹독 면역 (반려동물에게 무해함)",
        image: "images/plant-19.png", subtitle: "동글동글하고 반짝이는 잎사귀가 사랑스러운 미니 화분", tags: ["#동글동글잎사귀", "#반려동물안전", "#초미니화분"],
        spot: "작은 책상 위, 식탁 한가운데, 욕실 선반", caution: "잎에 물을 저장하는 성질이 있으므로 겉흙이 마르고 며칠 뒤에 물을 주세요.", link: "https://www.google.com/search?q=페페로미아+화분+구매",
        sunlight: "low", airQuality: "normal", space: "small", pollution: "low", careType: "easy", mood: "healing",
        description: "반려동물에게 무해(Non-toxic)하여 안심하고 어디든 둘 수 있는 안전한 파트너입니다."
    },
    {
        name: "홍콩야자", nickname: "미니 파라솔", type: "풀 / 비행 (우산 모양의 잎)", skill: "우산 방패 (미세먼지 및 연기 차단)",
        image: "images/plant-20.png", subtitle: "우산처럼 펼쳐진 잎사귀가 미세먼지를 잡는 천연 공기청정기", tags: ["#우산모양잎", "#간접흡연정화", "#강인한생명력"],
        spot: "사무실 창가, 냄새나 외부 오염이 걱정되는 거실이나 창문 옆", caution: "통풍이 부족하면 벌레가 생길 수 있으니 가끔 창문을 열어주세요.", link: "https://www.google.com/search?q=홍콩야자+화분+구매",
        sunlight: "medium", airQuality: "high", space: "small", pollution: "high", careType: "easy", mood: "healing",
        description: "작은 우산을 펴놓은 듯 귀여운 잎사귀들로 화학 연기 정화 능력이 뛰어납니다."
    }
];

function playRetroSound() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return; 
    
    const audioCtx = new AudioContext();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); 
    oscillator.frequency.setValueAtTime(554.37, audioCtx.currentTime + 0.1); 
    oscillator.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.2); 
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime + 0.3); 

    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.5);
}

let typingTimeout;
function typeWriterEffect(element, text, speed = 30) {
    element.innerHTML = "";
    let i = 0;
    clearTimeout(typingTimeout);
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typingTimeout = setTimeout(type, speed);
        } else {
            element.innerHTML += '<span class="typewriter-cursor">▼</span>';
        }
    }
    type();
}

function recommendPlant() {
    playRetroSound();

    const userInputs = {
        sunlight: document.getElementById("sunlight").value,
        airQuality: document.getElementById("airQuality").value,
        space: document.getElementById("space").value,
        location: document.getElementById("location").value,
        pollution: document.getElementById("pollution").value,
        careType: document.getElementById("careType").value,
        mood: document.getElementById("mood").value
    };

    plantDatabase.forEach(plant => {
        let score = 0;
        
        if (plant.sunlight === userInputs.sunlight) score += 10;
        if (plant.airQuality === userInputs.airQuality) score += 10;
        if (plant.space === userInputs.space) score += 10;
        if (plant.pollution === userInputs.pollution) score += 10;
        if (plant.careType === userInputs.careType) score += 15;
        if (plant.mood === userInputs.mood) score += 15;
        
        if (userInputs.location === "urban" && plant.pollution === "high") {
            score += 5; 
        } else if (userInputs.location === "residential" && plant.pollution === "low") {
            score += 5; 
        }

        score += Math.floor(Math.random() * 3);

        plant.score = score;
    });

    plantDatabase.sort((a, b) => b.score - a.score);
    const bestPlant = plantDatabase[0];

    document.getElementById("plant-subtitle").innerText = `"${bestPlant.nickname}"`;
    document.getElementById("plant-name").innerText = bestPlant.name;
    document.getElementById("plant-type").innerText = bestPlant.type;
    document.getElementById("plant-skill").innerText = bestPlant.skill;
    document.getElementById("plant-spot").innerText = bestPlant.spot;
    document.getElementById("plant-caution").innerText = bestPlant.caution;
    
    const descElement = document.getElementById("plant-description");
    typeWriterEffect(descElement, bestPlant.description);
    
    const plantImageEl = document.getElementById("plant-image");
    plantImageEl.src = bestPlant.image;
    plantImageEl.alt = bestPlant.name + " 픽셀 캐릭터"; 

    plantImageEl.onerror = function() {
        this.src = "https://via.placeholder.com/150/9bbc0f/0f380f?text=NO+IMAGE";
    };

    const affiliateBtn = document.getElementById("plant-affiliate-link");
    affiliateBtn.href = bestPlant.link;

    const tagsContainer = document.getElementById("plant-tags");
    tagsContainer.innerHTML = ""; 
    bestPlant.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag-badge";
        span.innerText = tag;
        tagsContainer.appendChild(span);
    });

    const subListContainer = document.getElementById("sub-plants-list");
    subListContainer.innerHTML = ""; 
    for (let i = 1; i <= 2; i++) {
        const subPlant = plantDatabase[i];
        const li = document.createElement("li");
        li.innerHTML = `<strong>${subPlant.name}</strong> (속성: ${subPlant.type.split('/')[0].trim()})`;
        subListContainer.appendChild(li);
    }
    
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    
    const animationCard = document.getElementById("animation-card");
    animationCard.style.animation = 'none';
    void animationCard.offsetWidth; 
    animationCard.style.animation = 'popIn 0.5s ease-out forwards';

    resultBox.scrollIntoView({ behavior: 'smooth' });
}

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

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// 결과 카드 이미지 다운로드 기능
function downloadResult() {
    const card = document.getElementById("animation-card");
    
    html2canvas(card, { scale: 2, useCORS: true }).then(canvas => {
        const imageUrl = canvas.toDataURL("image/png");
        
        const downloadLink = document.createElement("a");
        downloadLink.href = imageUrl;
        downloadLink.download = "my-plant-dex.png"; 
        
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
}