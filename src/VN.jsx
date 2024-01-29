import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function VN({}) {
  const [characters, setCharacters] = useState([]);
  const [userInputs, setUserInputs] = useState({});
  const [highlighted, setHighlighted] = useState(false);

  const [errorCells, setErrorCells] = useState([]);

  const vietnamese = [
    { id: 1, key: "a", value: "あ" },
    { id: 2, key: "i", value: "い" },
    { id: 3, key: "u", value: "う" },
    { id: 4, key: "e", value: "え" },
    { id: 5, key: "o", value: "お" },
    { id: 6, key: "ka", value: "か" },
    { id: 7, key: "ki", value: "き" },
    { id: 8, key: "ku", value: "く" },
    { id: 9, key: "ke", value: "け" },
    { id: 10, key: "ko", value: "こ" },
    { id: 11, key: "sa", value: "さ" },
    { id: 12, key: "shi", value: "し" },
    { id: 13, key: "su", value: "す" },
    { id: 14, key: "se", value: "せ" },
    { id: 15, key: "so", value: "そ" },
    { id: 16, key: "ta", value: "た" },
    { id: 17, key: "chi", value: "ち" },
    { id: 18, key: "tsu", value: "つ" },
    { id: 19, key: "te", value: "て" },
    { id: 20, key: "to", value: "と" },
    { id: 21, key: "na", value: "な" },
    { id: 22, key: "ni", value: "に" },
    { id: 23, key: "nu", value: "ぬ" },
    { id: 24, key: "ne", value: "ね" },
    { id: 25, key: "no", value: "の" },
    { id: 26, key: "ha", value: "は" },
    { id: 27, key: "hi", value: "ひ" },
    { id: 28, key: "fu", value: "ふ" },
    { id: 29, key: "he", value: "へ" },
    { id: 30, key: "ho", value: "ほ" },
    { id: 31, key: "ma", value: "ま" },
    { id: 32, key: "mi", value: "み" },
    { id: 33, key: "mu", value: "む" },
    { id: 34, key: "me", value: "め" },
    { id: 35, key: "mo", value: "も" },
    { id: 36, key: "ya", value: "や" },
    { id: 37, key: "yu", value: "ゆ" },
    { id: 38, key: "yo", value: "よ" },
    { id: 39, key: "ra", value: "ら" },
    { id: 40, key: "ri", value: "り" },
    { id: 41, key: "ru", value: "る" },
    { id: 42, key: "re", value: "れ" },
    { id: 43, key: "ro", value: "ろ" },
    { id: 44, key: "wa", value: "わ" },
    { id: 45, key: "wo", value: "を" },
    { id: 46, key: "n", value: "ん" },
    { id: 47, key: "ga", value: "が" },
    { id: 48, key: "gi", value: "ぎ" },
    { id: 49, key: "gu", value: "ぐ" },
    { id: 50, key: "ge", value: "げ" },
    { id: 51, key: "go", value: "ご" },
    { id: 52, key: "za", value: "ざ" },
    { id: 53, key: "ji", value: "じ" },
    { id: 54, key: "zu", value: "ず" },
    { id: 55, key: "ze", value: "ぜ" },
    { id: 56, key: "zo", value: "ぞ" },
    { id: 57, key: "da", value: "だ" },
    { id: 58, key: "ji", value: "ぢ" },
    { id: 59, key: "zu", value: "づ" },
    { id: 60, key: "de", value: "で" },
    { id: 61, key: "do", value: "ど" },
    { id: 62, key: "ba", value: "ば" },
    { id: 63, key: "bi", value: "び" },
    { id: 64, key: "bu", value: "ぶ" },
    { id: 65, key: "be", value: "べ" },
    { id: 66, key: "bo", value: "ぼ" },
    { id: 67, key: "pa", value: "ぱ" },
    { id: 68, key: "pi", value: "ぴ" },
    { id: 69, key: "pu", value: "ぷ" },
    { id: 70, key: "pe", value: "ぺ" },
    { id: 71, key: "po", value: "ぽ" },
    { id: 72, key: "kya", value: "きゃ" },
    { id: 73, key: "kyu", value: "きゅ" },
    { id: 74, key: "kyo", value: "きょ" },
    { id: 75, key: "sha", value: "しゃ" },
    { id: 76, key: "shu", value: "しゅ" },
    { id: 77, key: "sho", value: "しょ" },
    { id: 78, key: "cha", value: "ちゃ" },
    { id: 79, key: "chu", value: "ちゅ" },
    { id: 80, key: "cho", value: "ちょ" },
    { id: 81, key: "nya", value: "にゃ" },
    { id: 82, key: "nyu", value: "にゅ" },
    { id: 83, key: "nyo", value: "にょ" },
    { id: 84, key: "hya", value: "ひゃ" },
    { id: 85, key: "hyu", value: "ひゅ" },
    { id: 86, key: "hyo", value: "ひょ" },
    { id: 87, key: "mya", value: "みゃ" },
    { id: 88, key: "myu", value: "みゅ" },
    { id: 89, key: "myo", value: "みょ" },
    { id: 90, key: "rya", value: "りゃ" },
    { id: 91, key: "ryu", value: "りゅ" },
    { id: 92, key: "ryo", value: "りょ" },
    { id: 93, key: "gya", value: "ぎゃ" },
    { id: 94, key: "gyu", value: "ぎゅ" },
    { id: 95, key: "gyo", value: "ぎょ" },
    { id: 96, key: "ja", value: "じゃ" },
    { id: 97, key: "ju", value: "じゅ" },
    { id: 98, key: "jo", value: "じょ" },
    { id: 99, key: "bya", value: "びゃ" },
    { id: 100, key: "byu", value: "びゅ" },
    { id: 101, key: "byo", value: "びょ" },
    { id: 102, key: "pya", value: "ぴゃ" },
    { id: 103, key: "pyu", value: "ぴゅ" },
    { id: 104, key: "pyo", value: "ぴょ" },

    { id: 105, value: "ア", key: "a" },
    { id: 106, value: "イ", key: "i" },
    { id: 107, value: "ウ", key: "u" },
    { id: 108, value: "エ", key: "e" },
    { id: 109, value: "オ", key: "o" },
    { id: 110, value: "カ", key: "ka" },
    { id: 111, value: "キ", key: "ki" },
    { id: 112, value: "ク", key: "ku" },
    { id: 113, value: "ケ", key: "ke" },
    { id: 114, value: "コ", key: "ko" },
    { id: 115, value: "サ", key: "sa" },
    { id: 116, value: "シ", key: "shi" },
    { id: 117, value: "ス", key: "su" },
    { id: 118, value: "セ", key: "se" },
    { id: 119, value: "ソ", key: "so" },
    { id: 120, value: "タ", key: "ta" },
    { id: 121, value: "チ", key: "chi" },
    { id: 122, value: "ツ", key: "tsu" },
    { id: 123, value: "テ", key: "te" },
    { id: 124, value: "ト", key: "to" },
    { id: 125, value: "ナ", key: "na" },
    { id: 126, value: "ニ", key: "ni" },
    { id: 127, value: "ヌ", key: "nu" },
    { id: 128, value: "ネ", key: "ne" },
    { id: 129, value: "ノ", key: "no" },
    { id: 130, value: "ハ", key: "ha" },
    { id: 131, value: "ヒ", key: "hi" },
    { id: 132, value: "フ", key: "fu" },
    { id: 133, value: "ヘ", key: "he" },
    { id: 134, value: "ホ", key: "ho" },
    { id: 135, value: "マ", key: "ma" },
    { id: 136, value: "ミ", key: "mi" },
    { id: 137, value: "ム", key: "mu" },
    { id: 138, value: "メ", key: "me" },
    { id: 139, value: "モ", key: "mo" },
    { id: 140, value: "ヤ", key: "ya" },
    { id: 141, value: "ユ", key: "yu" },
    { id: 142, value: "ヨ", key: "yo" },
    { id: 143, value: "ラ", key: "ra" },
    { id: 144, value: "リ", key: "ri" },
    { id: 145, value: "ル", key: "ru" },
    { id: 146, value: "レ", key: "re" },
    { id: 147, value: "ロ", key: "ro" },
    { id: 148, value: "ワ", key: "wa" },
    { id: 149, value: "ヲ", key: "wo" },
    { id: 150, value: "ン", key: "n" },
    { id: 151, value: "ガ", key: "ga" },
    { id: 152, value: "ギ", key: "gi" },
    { id: 153, value: "グ", key: "gu" },
    { id: 154, value: "ゲ", key: "ge" },
    { id: 155, value: "ゴ", key: "go" },
    { id: 156, value: "ザ", key: "za" },
    { id: 157, value: "ジ", key: "ji" },
    { id: 158, value: "ズ", key: "zu" },
    { id: 159, value: "ゼ", key: "ze" },
    { id: 160, value: "ゾ", key: "zo" },
    { id: 161, value: "ダ", key: "da" },
    { id: 162, value: "ヂ", key: "ji" },
    { id: 163, value: "ヅ", key: "zu" },
    { id: 164, value: "デ", key: "de" },
    { id: 165, value: "ド", key: "do" },
    { id: 166, value: "バ", key: "ba" },
    { id: 167, value: "ビ", key: "bi" },
    { id: 168, value: "ブ", key: "bu" },
    { id: 169, value: "ベ", key: "be" },
    { id: 170, value: "ボ", key: "bo" },
    { id: 171, value: "パ", key: "pa" },
    { id: 172, value: "ピ", key: "pi" },
    { id: 173, value: "プ", key: "pu" },
    { id: 174, value: "ペ", key: "pe" },
    { id: 175, value: "ポ", key: "po" },
    { id: 176, value: "キャ", key: "kya" },
    { id: 177, value: "キュ", key: "kyu" },
    { id: 178, value: "キョ", key: "kyo" },
    { id: 179, value: "シャ", key: "sha" },
    { id: 180, value: "シュ", key: "shu" },
    { id: 181, value: "ショ", key: "sho" },
    { id: 182, value: "チャ", key: "cha" },
    { id: 183, value: "チュ", key: "chu" },
    { id: 184, value: "チョ", key: "cho" },
    { id: 185, value: "ニャ", key: "nya" },
    { id: 186, value: "ニュ", key: "nyu" },
    { id: 187, value: "ニョ", key: "nyo" },
    { id: 188, value: "ヒャ", key: "hya" },
    { id: 189, value: "ヒュ", key: "hyu" },
    { id: 190, value: "ヒョ", key: "hyo" },
    { id: 191, value: "ミャ", key: "mya" },
    { id: 192, value: "ミュ", key: "myu" },
    { id: 193, value: "ミョ", key: "myo" },
    { id: 194, value: "リャ", key: "rya" },
    { id: 195, value: "リュ", key: "ryu" },
    { id: 196, value: "リョ", key: "ryo" },
    { id: 197, value: "ギャ", key: "gya" },
    { id: 198, value: "ギュ", key: "gyu" },
    { id: 199, value: "ギョ", key: "gyo" },
    { id: 200, value: "ジャ", key: "ja" },
    { id: 201, value: "ジュ", key: "ju" },
    { id: 202, value: "ジョ", key: "jo" },
    { id: 203, value: "ビャ", key: "bya" },
    { id: 204, value: "ビュ", key: "byu" },
    { id: 205, value: "ビョ", key: "byo" },
    { id: 206, value: "ピャ", key: "pya" },
    { id: 207, value: "ピュ", key: "pyu" },
    { id: 208, value: "ピョ", key: "pyo" },
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
                  />
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
