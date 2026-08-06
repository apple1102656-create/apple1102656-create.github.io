// 식물 데이터베이스 (필요에 따라 식물 종류를 계속 추가하실 수 있습니다)
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
        image: "images/monstera.png", // 준비된 이미지가 없다면 빈 칸으로 두거나 기본 이미지를 설정하세요.
        // 점수 기준 (테스트 로직용)
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

// 1. 메인 추천 함수 (A버튼 클릭 시 실행)
function recommendPlant() {
    // 사용자가 선택한 값 가져오기
    const sunlight = document.getElementById("sunlight").value;
    const space = document.getElementById("space").value;
    const careType = document.getElementById("careType").value;

    // 간단한 추천 로직: 조건과 가장 많이 일치하는 식물 찾기
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

    // 화면(DOM)에 결과 데이터 출력하기
    document.getElementById("plant-subtitle").innerText = bestPlant.subtitle;
    document.getElementById("plant-name").innerText = bestPlant.name;
    document.getElementById("plant-type").innerText = bestPlant.type;
    document.getElementById("plant-skill").innerText = bestPlant.skill;
    document.getElementById("plant-description").innerText = bestPlant.description;
    document.getElementById("plant-spot").innerText = bestPlant.spot;
    document.getElementById("plant-caution").innerText = bestPlant.caution;
    
    // 이미지 처리 (이미지가 없으면 임시 텍스트 출력)
    const imgElement = document.getElementById("plant-image");
    if (bestPlant.image) {
        imgElement.src = bestPlant.image;
        imgElement.alt = bestPlant.name;
    }

    // 태그 처리
    const tagsContainer = document.getElementById("plant-tags");
    tagsContainer.innerHTML = "";
    bestPlant.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.innerText = tag;
        tagsContainer.appendChild(span);
    });

    // ----------------------------------------------------
    // [핵심 업데이트] 구글 이미지 검색 URL 자동 생성기
    // ----------------------------------------------------
    const affiliateBtn = document.getElementById("plant-affiliate-link");
    // "식물 이름 + 식물" 형태로 검색어를 인코딩하여 구글 이미지 탭으로 바로 연결합니다.
    const searchQuery = encodeURIComponent(bestPlant.name + " 식물");
    affiliateBtn.href = `https://www.google.com/search?tbm=isch&q=${searchQuery}`;

    // 서브 추천 리스트 (1등을 제외한 나머지 식물들)
    const subList = document.getElementById("sub-plants-list");
    subList.innerHTML = "";
    plantsDB.filter(p => p.name !== bestPlant.name).forEach(subPlant => {
        const li = document.createElement("li");
        li.innerText = `${subPlant.name} (속성: ${subPlant.type.split('/')[0].trim()})`;
        subList.appendChild(li);
    });

    // 숨겨져 있던 결과 창 보여주기
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    
    // 부드럽게 스크롤 이동
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

// 2. 아코디언(가이드) 토글 함수
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// 3. 결과 공유하기 기능 (웹 공유 API)
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

// 4. 결과 이미지로 저장하기 (html2canvas)
function downloadResult() {
    const card = document.getElementById("animation-card");
    html2canvas(card, { backgroundColor: "#f8f8d8" }).then(canvas => {
        const link = document.createElement("a");
        link.download = "my_plant_dex.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}