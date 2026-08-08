// 1. 추천 식물몬 데이터베이스[cite: 8]
const plantsDB = [
    {
        name: "몬스테라",
        subtitle: "거대한 잎사귀의 지배자",
        type: "풀 / 어둠 (크고 넓은 잎, 반음지 생존)",
        skill: "광합성 폭발 (빠른 성장력)",
        tags: ["#플랜테리어끝판왕", "#순둥이", "#폭풍성장"],
        description: "찢어진 잎이 매력적인 열대 우림의 몬스터입니다. 어떤 인테리어에도 찰떡같이 어울리며 초보자도 쉽게 키울 수 있는 엄청난 생명력을 자랑합니다.",
        spot: "거실 창가, 통풍이 잘 되는 반음지",
        caution: "직사광선에 잎이 탈 수 있으니 커튼을 친 은은한 빛이 좋습니다.",
        image: "images/monstera.png",
        scoreMatch: { sunlight: "medium", space: "large", careType: "easy" }
    },
    {
        name: "스킨답서스",
        subtitle: "끈질긴 생명력의 덩굴손",
        type: "풀 / 독 (공기중 유해물질 흡수)",
        skill: "초미세먼지 포집 (일산화탄소 제거)",
        tags: ["#생명력갑", "#주방추천", "#덩굴식물"],
        description: "어두운 곳에서도 꿋꿋하게 살아남는 생존의 달인입니다. 특히 주방에서 발생하는 일산화탄소 제거 능력이 탁월합니다.",
        spot: "주방, 화장실, 빛이 부족한 선반 위",
        caution: "과습에 주의하고, 잎이 시들해질 때 물을 흠뻑 주세요.",
        image: "images/epipremnum.png",
        scoreMatch: { sunlight: "low", space: "small", careType: "easy" }
    },
    {
        name: "아레카야자",
        subtitle: "천연 가습기",
        type: "물 / 바람 (뛰어난 증산작용)",
        skill: "대기 정화 (NASA 선정 공기정화 1위)",
        tags: ["#천연가습", "#거실추천", "#NASA선정"],
        description: "하루에 엄청난 양의 수분을 뿜어내는 천연 가습기 식물입니다. 건조한 실내 환경을 촉촉하고 쾌적하게 만들어줍니다.",
        spot: "거실 소파 옆, 베란다 내측",
        caution: "잎끝이 마르면 가위로 살짝 다듬어주시고 분무기로 자주 물을 뿌려주세요.",
        image: "images/areca.png",
        scoreMatch: { sunlight: "high", space: "large", careType: "diligent" }
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

// 3. 메인 추천 함수[cite: 8]
function recommendPlant() {
    const sunlight = document.getElementById("sunlight").value;
    const space = document.getElementById("space").value;
    const careType = document.getElementById("careType").value;
    const birthMonth = document.getElementById("birthMonth").value;

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

    // 메인 식물 구글 이미지 검색 링크 생성[cite: 8]
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

    // 서브 추천 목록[cite: 8]
    const subList = document.getElementById("sub-plants-list");
    subList.innerHTML = "";
    plantsDB.filter(p => p.name !== bestPlant.name).forEach(subPlant => {
        const li = document.createElement("li");
        li.innerText = `${subPlant.name} (속성: ${subPlant.type.split('/')[0].trim()})`;
        subList.appendChild(li);
    });

    // 결과 화면 노출 및 스크롤[cite: 8]
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

// 4. 아코디언 토글[cite: 8]
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// 5. 공유 기능[cite: 8]
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

// 6. 결과 이미지 저장[cite: 8]
function downloadResult() {
    const card = document.getElementById("animation-card");
    html2canvas(card, { backgroundColor: "#f8f8d8" }).then(canvas => {
        const link = document.createElement("a");
        link.download = "my_plant_dex.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}