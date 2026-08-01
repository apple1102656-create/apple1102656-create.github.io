import os
from rembg import remove
from PIL import Image

# 1. 작업할 폴더 이름 설정
input_folder = 'input_images' # 원본 이미지를 넣을 폴더
output_folder = 'images'      # 완성된 투명 이미지가 저장될 폴더 (웹사이트에 올릴 폴더)

# 2. 폴더가 없으면 자동으로 생성
if not os.path.exists(input_folder):
    os.makedirs(input_folder)
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# 3. 도감에 맞춘 완벽한 타겟 사이즈 (정사각형)
target_size = (500, 500)

print("🌱 식물몬 이미지 자동 처리를 시작합니다...")
print(f"'{input_folder}' 폴더에 있는 이미지들을 변환합니다.\n")

# 4. 원본 폴더 안의 모든 파일 확인
for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
        input_path = os.path.join(input_folder, filename)
        
        # 확장자를 강제로 .png로 변경하여 투명도 유지
        name_without_ext = os.path.splitext(filename)[0]
        output_path = os.path.join(output_folder, f"{name_without_ext}.png")

        try:
            # 원본 이미지 열기
            input_image = Image.open(input_path)
            
            # AI를 활용하여 배경 투명하게 지우기
            print(f"[{filename}] 배경 제거 중...")
            no_bg_image = remove(input_image)
            
            # 이미지가 깨지지 않게 비율을 유지하며 크기 줄이기
            no_bg_image.thumbnail(target_size, Image.Resampling.LANCZOS)
            
            # 500x500 크기의 투명한 빈 캔버스 만들기
            new_image = Image.new("RGBA", target_size, (255, 255, 255, 0))
            
            # 배경이 지워진 캐릭터를 투명 캔버스 정중앙에 붙여넣기
            paste_x = (target_size[0] - no_bg_image.width) // 2
            paste_y = (target_size[1] - no_bg_image.height) // 2
            new_image.paste(no_bg_image, (paste_x, paste_y), no_bg_image)
            
            # 최종 결과물 저장
            new_image.save(output_path, "PNG")
            print(f" -> 성공! '{name_without_ext}.png' 저장 완료\n")
            
        except Exception as e:
            print(f"[오류] {filename} 처리 중 문제가 발생했습니다: {e}\n")

print("✨ 모든 캐릭터 이미지 준비가 완료되었습니다! 'images' 폴더를 확인해 주세요.")