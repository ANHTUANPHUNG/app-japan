import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function TVVN({}) {
  const [characters, setCharacters] = useState([]);
  const [userInputs, setUserInputs] = useState({});
  const [highlighted, setHighlighted] = useState(false);

  const [errorCells, setErrorCells] = useState([]);

  const vietnamese = [
    { id: 1, key: "buổi sáng", value: "あ さ" },
    { id: 2, key: "ngôi nhà", value: "い え" },
    { id: 3, key: "con suối", value: "う け" },
    { id: 4, key: "cây", value: "き" },
    { id: 5, key: "cỏ", value: "く さ" },
    { id: 6, key: "lá", value: "は っ ば" },
    { id: 7, key: "nhà ga", value: "え き" },
    { id: 8, key: "cái ô", value: "か さ" },
    { id: 9, key: "giọng nói", value: "こ え" },
    { id: 10, key: "chân", value: "あ し" },
    { id: 11, key: "khuôn mặt", value: "か お" },
    { id: 12, key: "ghế", value: "い す" },
    { id: 13, key: "dưa hấu", value: "す い か" },
    { id: 14, key: "muối", value: "し お" },
    { id: 15, key: "bò", value: "う し" },
    { id: 16, key: "thế giới", value: "せ か い" },
    { id: 17, key: "đò ngọt, bánh kẹo", value: "お か し" },
    { id: 18, key: "chào buổi sáng", value: "お ひょ う ご ざ い ま す " },
    { id: 19, key: "chào buổi trưa", value: "こ ん に ち は" },
    { id: 20, key: "chào buổi tối", value: "こ ん ば ん は" },
    { id: 21, key: "chúc ngủ ngon", value: "こ や す み な さ い" },
    { id: 22, key: "lối vào", value: "い り ぐ ち" },
    { id: 23, key: "lối ra", value: "ど ぐ ち" },
    { id: 24, key: "cửa sổ", value: "ま ど" },
    { id: 25, key: "bức tường", value: "か べ" },
    { id: 26, key: "chìa khóa", value: "か ぎ" },
    { id: 27, key: "bút chì", value: "う ん ぴ つ" },
    { id: 28, key: "giặt giũ", value: "せ ん た く" },
    { id: 29, key: "bóng đèn", value: "で ん き" },
    { id: 30, key: "nhà văn", value: "さ っ か" },
    { id: 31, key: "nhạc cụ", value: "が っ き" },
    { id: 32, key: "nhật kí", value: "に っ き" },
    { id: 33, key: "kết hôn", value: "け っ こ ん" },
    { id: 34, key: "tạp chí", value: "ざ っ し" },
    { id: 35, key: "1 tuổi", value: "い っ さ い" },
    { id: 36, key: "tem", value: "き っ て" },
    { id: 37, key: "vé", value: "き っ ぷ" },
    { id: 39, key: "cái đuôi", value: "し っ ぽ" },
    { id: 40, key: "1", value: "い ち" },
    { id: 41, key: "2", value: "に" },
    { id: 42, key: "3", value: "き ん" },
    { id: 43, key: "4", value: "よ ん, し" },
    { id: 44, key: "5", value: "ご" },
    { id: 45, key: "6", value: "ろ く" },
    { id: 46, key: "7", value: "な な, し ち" },
    { id: 47, key: "8", value: "は ち" },
    { id: 48, key: "9", value: "きゅ う, く" },
    { id: 49, key: "10", value: "じゅ う" },
    { id: 50, key: "100", value: "ひゃ く" },
    { id: 51, key: "300", value: "さ ん びゃ く" },
    { id: 52, key: "600", value: "ろ っ ぴゃ く" },
    { id: 53, key: "800", value: "は っ ぴゃ く" },
    { id: 54, key: "1000", value: "せ ん" },
    { id: 55, key: "3000", value: "さ ん ぜ ん" },
    { id: 56, key: "8000", value: "は っ せ ん" },
    { id: 57, key: "8 tuổi", value: "は っ さ い" },
    { id: 58, key: "10 tuổi", value: "じゅ っ さ い, じ っ さ い" },
    { id: 59, key: "20 tuổi", value: "は た ち" },
    { id: 60, key: "1 người", value: "ひ と り" },
    { id: 61, key: "2 người", value: "ふ た り" },
    { id: 62, key: "4 người", value: "よ に ん" },
    { id: 63, key: "1 tầng", value: "い っ か い" },
    { id: 64, key: "3 tầng", value: "さ ん が い" },
    { id: 65, key: "6 tầng", value: "ら っ か い" },
    { id: 66, key: "8 tầng", value: "は っ か い" },
    { id: 67, key: "tôi", value: "わ た し" },
    { id: 68, key: "bạn", value: "あ な た" },
    { id: 69, key: "người kia", value: "あ の ひ と( あ の か た )" },
    { id: 70, key: "chỉ người", value: "さ ん" },
    { id: 71, key: "chỉ trẻ em", value: "ちゃ ん, く ん" },
    { id: 72, key: "chỉ người nước", value: "じ ん" },
    { id: 73, key: "thầy, cô", value: "せ ん せ い" },
    { id: 74, key: "giáo viên", value: "きょ し" },
    { id: 75, key: "học sinh, sinh viên", value: "が く せ" },
    { id: 76, key: "nhân viên công ty", value: "か い しゃ い ん" },
    { id: 77, key: "nhân viên kèm tên công ty", value: "しゃ い ん" },
    { id: 78, key: "nhân viên ngân hàng", value: "ぎ ん こ う い ん" },
    { id: 79, key: "bác sĩ", value: "い しゃ" },
    { id: 80, key: "nhà nghiên cứu", value: "け ん きゅ う しゃ" },
    { id: 81, key: "trường đại học", value: "だ い が く" },
    { id: 82, key: "bệnh viện", value: "びょ い ん" },
    { id: 83, key: "ai", value: "だ れ ( ど な た)" },
    { id: 84, key: "mấy tuổi", value: "な ん さ い ( お い く つ)" },
    { id: 85, key: "vâng", value: "け い" },
    { id: 86, key: "không", value: "い い え" },
    { id: 87, key: "rất hân hạnh được gặp", value: "け じ め ま し て" },
    { id: 88, key: "tôi đến từ", value: "か ら き ま し た" },
    { id: 89, key: "rất vui được làm quen( rất mong được giúp đỡ)", value: "ど う ぞ ろ し く お ね が い し ま す" },
    { id: 90, key: "xin lỗi để hỏi ", value: "りゃ" },
    { id: 91, key: "tên là gì", value: "お な ま え け" },
    { id: 92, key: "đầy là ai đó", value: "こ ち ら け" },
    { id: 93, key: "việt nam", value: "ベ ト ノ ム" },
    { id: 94, key: "mỹ", value: "ア メ リ カ" },
    { id: 95, key: "anh", value: "イ ギ リ ス" },
    { id: 96, key: "ấn độ", value: "イ ン ド" },
    { id: 97, key: "hàn quốc", value: "か ん こ く" },
    { id: 98, key: "thái", value: "タ イ" },
    { id: 99, key: "trung quốc", value: "ちゅ う ご く" },
    { id: 100, key: "đức", value: "ド イ ツ" },
    { id: 101, key: "nhật bản", value: "に ほ ん" },
    { id: 102, key: "braxin", value: "ブ ラ ジ ル" },
    { id: 103, key: "cái này", value: "こ れ" },
    { id: 104, key: "cái đó", value: "そ れ" },

    { id: 105, value: "あ れ", key: "cái kia" },
    { id: 106, value: "こ の", key: "này" },
    { id: 107, value: "そ の", key: "đó" },
    { id: 108, value: "あ の", key: "kia" },
    { id: 109, value: "ほ ん", key: "sách" },
    { id: 110, value: "じ しょ", key: "từ điển" },
    { id: 112, value: "し ん ぶ ん", key: "báo" },
    { id: 113, value: "ノ ー ト", key: "vở" },
    { id: 114, value: "て ちょ", key: "sổ tay" },
    { id: 115, value: "め い し", key: "danh thiếp" },
    { id: 116, value: "カ ー ド", key: "thẻ" },
    { id: 118, value: "ボ ー プ ペ ン", key: "bút bi" },
    { id: 119, value: "シャ ー プ ペ ン シ ル", key: "bút chì kim" },
    { id: 121, value: "ト ケ イ", key: "đồng hồ" },
    { id: 122, value: "か ば ん", key: "cặp" },
    { id: 123, value: "テ レ ビ", key: "tivi" },
    { id: 124, value: "ラ ズ オ", key: "radio" },
    { id: 125, value: "カ メ ラ", key: "máy ảnh" },
    { id: 117, value: "コ ン ピュ ー タ ー", key: "máy vi tính" },
    { id: 126, value: "く る ま", key: "ô tô" },
    { id: 127, value: "つ く え", key: "bàn" },
    { id: 128, value: "チョ コ レ ー ト", key: "socola" },
    { id: 129, value: "コ ー ヒ ー", key: "cafe" },
    { id: 130, value: "お み や げ", key: "quà" },
    { id: 131, value: "え い ご", key: "tiếng anh" },
    { id: 132, value: "に ほ ん ご", key: "tiếng nhật" },
    { id: 133, value: "な ん", key: "cái gì" },
    { id: 134, value: "そ う", key: "vậy" },
    { id: 135, value: "あ の う", key: "à, ờ" },
    { id: 136, value: "え つ", key: "hả" },
    { id: 137, value: "ど う ぞ", key: "xin mời" },
    { id: 138, value: "ど う も あ り が と う ご ざ い ま す", key: "xin chân thành cảm ơn, cảm ơn rất nhiều" },
    { id: 139, value: "そ う で す か", key: "thế à" },
    { id: 140, value: "ち が い ま す", key: "không phải" },
    { id: 141, value: "こ れ か ら", key: "từ nay" },
    { id: 142, value: "こ れ か ら お せ わ に な り ま す", key: "từ nay rất mong nhận được sự giúp đỡ" },
    { id: 143, value: "こ ち ら こ そ", key: "chính tôi" },
    { id: 144, value: "こ ち ら こ そ ど う ぞ ろ し く お ね が い し ま す", key: "chính tôi mới là người mong nhận được sự giúp đỡ" },
    { id: 145, value: "こ こ", key: "chỗ này" },
    { id: 146, value: "そ こ", key: "chỗ đó" },
    { id: 147, value: "あ こ", key: "chỗ kia" },
    { id: 148, value: "ど こ", key: "chỗ nào" },
    { id: 149, value: "きょ し つ", key: "lớp học, phòng học" },
    { id: 150, value: "しょ く ど", key: "nhà ăn" },
    { id: 151, value: "じ む しょ", key: "văn phòng" },
    { id: 152, value: "か い ぎ つ", key: "phòng họp" },
    { id: 153, value: "う け つ け", key: "lễ tân, thường trực" },
    { id: 154, value: "ロ ビ ー", key: "hành lang, đại sảnh" },
    { id: 155, value: "へ や", key: "căn phòng" },
    { id: 156, value: "お て あ ら い (ト イ レ)", key: "nhà vệ sinh" },
    { id: 157, value: "か い だ ん", key: "cầu thang" },
    { id: 158, value: "エ レ ベ ー タ ー", key: "thang máy" },
    { id: 159, value: "エ ス カ レ ー タ ー", key: "thang cuốn" },
    { id: 160, value: "じ ど う", key: "tự động" },
    { id: 161, value: "じ ど は ん ば う い き", key: "máy bán hàng tự động" },
    { id: 162, value: "だ ん わ", key: "điện thoại" },
    { id: 163, value: "く に", key: "nước" },
    { id: 164, value: "か い さ", key: "công ty" },
    { id: 165, value: "う ち", key: "nhà" },
    { id: 166, value: "く つ", key: "giày" },
    { id: 167, value: "ね く た い", key: "cà vạt" },
    { id: 168, value: "ワ イ ン", key: "rượu vang" },
    { id: 169, value: "い り ば", key: "quầy bán" },
    { id: 170, value: "ち く", key: "tầng hầm" },
    { id: 171, value: "い く ら", key: "bao nhiêu tiền" },
    { id: 172, value: "え ん", key: "yên" },
    { id: 174, value: "す み ま せ ん", key: "xin lỗi" },
    { id: 175, value: "ど う も", key: "cảm ơn" },
    { id: 176, value: "い ら っ しゃ い ま せ", key: "xin chào quý khách, mời quý khách vào" },
    { id: 177, value: "み せ て く だ さ い", key: "を + cho tôi xem " },
    { id: 178, value: "しゃ", key: "thế thì" },
    { id: 179, value: "く だ さ い", key: "を + cho tôi" },
    
  ];
  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    const itemsPerRow = 20;

    const shuffledCharacters = [...vietnamese];
    shuffleArray(shuffledCharacters);

    const rows = Math.ceil(shuffledCharacters.length / itemsPerRow);
    const charactersInRows = Array.from({ length: rows }, (_, rowIndex) => {
      const startIndex = rowIndex * itemsPerRow;
      const endIndex = Math.min((rowIndex + 1) * itemsPerRow, shuffledCharacters.length);

      return shuffledCharacters.slice(startIndex, endIndex);
    });

    setCharacters(charactersInRows);
  }, []);
  const handleInputChange = (id, inputValue) => {
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [id]: inputValue,
    }));
  };
  const validateInputs = () => {
    const errors = [];

    characters.forEach((row) => {
      row.forEach(({ id, value }) => {
        const userInput = userInputs[id];
        if (!userInput || userInput.trim().toLowerCase() !== value.toLowerCase()) {
          errors.push(id);
        }
      });
    });

    setErrorCells(errors);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      validateInputs();
      setHighlighted(true);
    }
  };
  console.log(errorCells);
  return (
    <>
      <div>
        <div className={`character-grid${highlighted ? " highlighted" : ""}`}>
          <div className="d-flex" style={{ backgroundColor: "#fff3a0" }}>
            <NavLink to={"/"}>
              <h4 style={{ cursor: "pointer" }}>Nhật Việt</h4>
            </NavLink>
            <NavLink to={"/VN"}>
              <h4 style={{ cursor: "pointer" }}>Việt Nhật</h4>
            </NavLink>
            <NavLink to={"/TVNV"}>
              <h4 style={{ cursor: "pointer" }}>Từ vựng Nhật Việt</h4>
            </NavLink>
            <NavLink to={"/TVVN"}>
              <h4 style={{ cursor: "pointer" }}>Từ vựng Việt Nhật</h4>
            </NavLink>
          </div>
          {characters.map((row, rowIndex) => (
            <div key={rowIndex} className="character-row">
              {row.map(({ id, key, value }) => (
                <div
                  key={id}
                  className={`character-item${errorCells.includes(id) ? " error" : ""}`}
                >
                  {key}
                  <input
                    style={{ width: "30px" }}
                    type="text"
                    value={userInputs[id] || ""}
                    onChange={(e) => handleInputChange(id, e.target.value)}
                    onKeyDown={handleKeyDown}
                  /><br/>
                  {errorCells.length !=0 ? value:""}
                </div>
              ))}
            </div>
          ))}
          <button
            onClick={() => {
              validateInputs();
              setHighlighted(true);
            }}
          >
            Kiểm tra
          </button>
        </div>
      </div>
    </>
  );
}
