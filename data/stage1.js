// Stage1の中身：視覚のしかけカテゴリ・全サブ要素・感情マッピング・CSV記載の漫画30話限定紐付け版
const STAGE1_DATA = {
  categories: [
    {
      key: "color",
      name: "色",
      icon: "palette",
      meaning: "色を見るだけで、心臓がドキドキしたり心がすーっと落ち着いたりする。画家は色の組み合わせを工夫して、見る人の感情を静かに動かしている。"
    },
    {
      key: "light",
      name: "光と影",
      icon: "lightbulb",
      meaning: "暗い場所に不安を感じたり、照らされた場所に自然と安心したりする。画家は光と影の強弱を調整して、画面の中にドラマチックな空気を作り出している。"
    },
    {
      key: "texture",
      name: "筆致",
      icon: "paintbrush",
      meaning: "絵の具のでこぼこや力強い勢いを目で追うと、手で直接触れたような臨場感が湧いてくる。画家の動きや息づかいを、キャンバスの表面からそのまま体感できる。"
    },
    {
      key: "composition",
      name: "構図",
      icon: "compass-drafting",
      meaning: "視線は無意識のうちに画面の特定の場所へ引き寄せられていく。画家は物の配置や線の向きを工夫して、見る人の目を自然と導いている。"
    },
    {
      key: "mirror",
      name: "からだ",
      icon: "hand-holding-heart",
      meaning: "絵の中の人の表情やポーズを見るだけで、自分の身体まで同じように反応してしまう。脳が相手の姿や目線を、まるで自分の体験であるかのように重ね合わせている。"
    },
    {
      key: "gap",
      name: "ギャップ",
      icon: "masks-theater",
      meaning: "美しさと恐ろしさのように、正反対の要素がひとつの絵に混ざり合うと、頭の整理が追いつかなくなる。見る人の予想を裏切ることで、目が離せない強い印象を残す。"
    }
  ],

  emotions: [
    {
      key: "immersed", name: "没入・安心", sub: "包み込まれる世界", icon: "water", bg: "var(--green)", short: "うっとり",
      words: ["うっとり", "まったり", "ホッとする", "引き込まれる", "静まる", "包まれる"],
      mechanism: "やわらかい色や穏やかな空間の中にいると、心拍数が落ち着いて、まるでその世界に溶け込んだような気分になる。",
      subs: ["white", "blue", "sacredlight", "moonlight", "softlight", "hands", "embrace", "horizon", "silence"]
    },
    {
      key: "awe", name: "畏敬・圧倒", sub: "とてつもない美しさ", icon: "mountain", bg: "var(--blue)", short: "ゾクゾク",
      words: ["ぞわぞわ", "ゾクゾク", "息を呑む", "鳥肌が立つ", "圧倒される", "めまいがする"],
      mechanism: "自分の力じゃとてもかなわないくらい大きいもの、細かいもの、神々しいものに出会うと、ちょっと怖いけど感動して鳥肌が立つ。",
      subs: ["black", "chiaroscuro", "backlight", "hyperdetail", "center", "goldenratio", "depth", "ruins", "stillmotion", "beautyfear", "lifeanddeath"]
    },
    {
      key: "excite", name: "興奮・活力", sub: "エネルギー", icon: "fire", bg: "var(--mustard)", short: "ドキドキ",
      words: ["ドキドキ", "ワクワク", "ハッとする", "血が騒ぐ", "テンションが上がる", "そわそわする"],
      mechanism: "はっきりした色や、いきおいのある筆づかいを見ると、体がびっくりして気分が盛り上がる。",
      subs: ["red", "orange", "yellow", "warmcool", "complementary", "splatter", "impasto", "brushstroke", "diagonal", "crowd"]
    },
    {
      key: "unease", name: "違和感・不安", sub: "不気味", icon: "eye", bg: "var(--pink)", short: "ざわざわ",
      words: ["ざわざわ", "ヒヤッとする", "なにかおかしい", "不気味", "落ち着かない", "モヤモヤ"],
      mechanism: "「なんかヘンだな」「暗くて見えないな」という部分があると、脳が「危険かもしれない！」と警戒して緊張する。",
      subs: ["black", "darkness", "asymmetry", "pain", "facingaway", "silence", "deform", "beautyfear", "grid"]
    },
    {
      key: "relaxed", name: "解放・爽快", sub: "解き放たれる", icon: "wind", bg: "var(--green)", short: "すっきり",
      words: ["すっきり", "開放感", "スカッとする", "風を感じる", "軽やか", "広々"],
      mechanism: "大きな空やまっすぐ伸びる道を見ると、身体の緊張が緩んで、呼吸が深くなる。",
      subs: ["green", "white", "softlight", "onepoint", "horizon", "gradation", "stretch", "languid", "float"]
    },
    {
      key: "intellectual", name: "知的快感", sub: "謎解きの面白さ", icon: "puzzle-piece", bg: "var(--mustard)", short: "なるほど！",
      words: ["なるほど！", "アハ体験", "伏線回収", "ピタッとはまる", "ゾクッとする発見", "スッキリ"],
      mechanism: "バラバラに見えていた要素が、画家の仕掛け（ルール）に気づいた瞬間に「1つの理由」でつながり、脳の中で快感物質が出る。",
      subs: ["sfumato", "flat", "complementary", "triangle", "framing", "center", "goldenratio", "grid", "gaze", "hands"]
    }
  ],

  subs: [
    // --- 1. 色 (color) ---
    {
      key: "red", name: "赤", icon: "droplet", cat: "color",
      swatch: "#e5484d",
      summary: "脈拍をあげる情熱と命の色",
      tags: ["#ドキドキ", "#緊張", "#危険", "#血が騒ぐ", "#テンションが上がる"],
      meaning: "赤は血や火を連想させる強い色。見つめるだけで人の脈拍が上がり、主役の激しい感情や一番目立たせたい場所を印象づける。",
      episodes: [
        {
          vol: "vol.32",
          title: "【心の脈拍をあげる赤】脳にダイレクトに届く激しい熱量の演出",
          url: "https://www.instagram.com/p/C_EXAMPLE32/",
          artists: ["アンリ・マティス", "フィンセント・ファン・ゴッホ", "ピエール＝オーギュスト・ルノワール"]
        }
      ]
    },
    {
      key: "blue", name: "青", icon: "water", cat: "color",
      swatch: "#3b6fd4",
      summary: "心をなだめる深い静寂と広がり",
      tags: ["#切ない", "#吸い込まれそう", "#うっとり", "#ゾクゾク", "#力がぬける"],
      meaning: "青は空や海、広大な宇宙を連想させ、心を穏やかに鎮める色。絵画では深い静けさや孤独、奥へ引き込まれる奥行き感を演出する。"
    },
    {
      key: "yellow", name: "黄", icon: "sun", cat: "color",
      swatch: "#ffd400",
      summary: "脳を直撃する希望と光の合図",
      tags: ["#ワクワク", "#テンションが上がる", "#落ち着かない"],
      meaning: "黄色は自然界の太陽や実りを象徴し、脳へ素早く届く明るい色。一滴あるだけで画面に希望や喜びをもたらし、強い注目を集める。"
    },
    {
      key: "green", name: "緑", icon: "leaf", cat: "color",
      swatch: "#4caf6a",
      summary: "目を休ませる自然の安心感",
      tags: ["#ざわざわ", "#毒気", "#そわそわする", "#ヒヤッとする"],
      meaning: "緑は森林そのものであり、人間の目が最も識別しやすく疲れない安心の色。画面の緊張感を和らげ、穏やかな憩いの空気を作る。"
    },
    {
      key: "black", name: "黒", icon: "moon", cat: "color",
      swatch: "#1a1a1a",
      summary: "未知の恐怖と画面を締める闇",
      tags: ["#圧倒される", "#ヒヤッとする", "#こわいのに見たい"],
      meaning: "すべての光を吸収する黒は、絶望や未知への恐怖を象徴する色。隣り合う他の色を引き立て、画面の輪郭を強く引き締める。"
    },
    {
      key: "white", name: "白", icon: "snowflake", cat: "color",
      swatch: "#ffffff",
      summary: "神聖さと無限の空白",
      tags: ["#ホッとする", "#心が洗われる", "#スッキリ", "#力がぬける", "#頭がさえる"],
      meaning: "汚れのない白は、神聖さや純粋さ、無限の空白を感じさせる色。周囲の色を引き立てるベースとなり、静寂の緊張感も生み出す。"
    },
    {
      key: "orange", name: "オレンジ", icon: "fire", cat: "color",
      swatch: "#ff8a3d",
      summary: "人肌の温もりと太陽の活気",
      tags: ["#ワクワク", "#ほっこり", "#テンションが上がる"],
      meaning: "赤の熱量と黄色の明るさをあわせ持ったオレンジは、夕焼けのように心を温める。人肌の温もりや活気あふれる陽気さを与える。"
    },
    {
      key: "purple", name: "紫", icon: "eye", cat: "color",
      swatch: "#8b5fbf",
      summary: "熱と冷たさが同居する妖しさ",
      tags: ["#ざわざわ", "#もやもや", "#神秘的"],
      meaning: "情熱の赤と静寂の青が混ざり合うミステリアスな色。相反する感情が同居するため、観る者の心に妖しい揺らぎやもやもやを生み出す。"
    },
    {
      key: "gold", name: "金", icon: "sparkles", cat: "color",
      swatch: "linear-gradient(135deg,#f6e27a,#c9a227)",
      summary: "現実を消し去る非現実の光",
      tags: ["#吸い込まれそう", "#息を呑む", "#圧倒される", "#ワクワク"],
      meaning: "光を弾く金の背景は現実の距離感を失わせる。影のない平面の輝きが見る者を吸い込み、異次元の神聖な世界へと誘う。"
    },
    {
      key: "silver", name: "銀", icon: "snowflake", cat: "color",
      swatch: "linear-gradient(135deg,#f2f2f2,#a8a8a8)",
      summary: "冴えわたる知性と冷たい気品",
      tags: ["#ホッとする", "#ヒヤッとする", "#凛とする"],
      meaning: "派手な自己主張を抑えた金属的な輝きを持つ色。血の通った温もりを削ぎ落とし、静寂の中で冴え渡る知性と緊張感をもたらす。"
    },
    {
      key: "warmcool", name: "暖色・寒色", icon: "temperature-half", cat: "color",
      swatch: "linear-gradient(90deg, #e5484d, #3b6fd4)",
      summary: "温度の感覚で感情を揺さぶる",
      tags: ["#ドキドキ", "#そわそわ", "#ゾクゾク"],
      meaning: "温もりを感じる暖色とひんやり冷たい寒色。色が持つ温度の感覚が、見る人の身体感覚や感情をダイレクトに揺さぶる。"
    },
    {
      key: "complementary", name: "補色", icon: "circle-half-stroke", cat: "color",
      swatch: "linear-gradient(90deg, #e5484d, #4caf6a)",
      summary: "反対の色が引き立てあう魔法",
      tags: ["#ハッとする", "#目がさめる", "#ドキドキ"],
      meaning: "赤と緑、青とオレンジなど反対側の色を隣り合わせる技法。お互いの色を限界まで鮮やかに際立たせる効果を持つ。",
      episodes: [
        {
          vol: "vol.33",
          title: "【限界まで輝く補色の魔法】反発する色が引き立て合う視覚トリップ",
          url: "https://www.instagram.com/p/C_EXAMPLE33/",
          artists: ["フィンセント・ファン・ゴッホ", "ジョルジュ・スーラ", "ポール・シニャック"]
        }
      ]
    },
    {
      key: "gradation", name: "空の色", icon: "cloud-sun", cat: "color",
      swatch: "linear-gradient(180deg, #ff8a3d, #8b5fbf)",
      summary: "運命を暗示するグラデーション",
      tags: ["#ハラハラ", "#ぞわぞわ", "#うっとり"],
      meaning: "刻一刻と変化する空のグラデーションは、作品全体の空気感や登場人物の運命を暗示し、画面のムードを一気に決める。",
      episodes: [
        {
          vol: "vol.30",
          title: "【あやしい空のグラデーション】観る人をハラハラさせる、空の演出",
          url: "https://www.instagram.com/p/C_EXAMPLE1/",
          artists: ["J.M.W.ターナー", "エル・グレコ", "エドヴァルド・ムンク"]
        }
      ]
    },

    // --- 2. 光と影 (light) ---
    {
      key: "softlight", name: "柔らかな光", icon: "cloud-sun", cat: "light",
      summary: "木漏れ日のような優しい包容力",
      tags: ["#うっとり", "#ホッとする", "#まったり"],
      meaning: "窓辺の木漏れ日や薄曇りの自然光。強い明暗を作らないおだやかな光線が、静かで優しく包み込むような空気感を作り出す。"
    },
    {
      key: "moonlight", name: "月光", icon: "moon", cat: "light",
      summary: "夜の静けさと秘密の時間",
      tags: ["#しんみり", "#静まる", "#吸い込まれそう"],
      meaning: "青白く静かに照らす月明かりやランタンの灯火は、心を落ち着かせる。昼間の喧騒から切り離された秘密の時間を演出する。"
    },
    {
      key: "darkness", name: "暗闇", icon: "moon", cat: "light",
      summary: "想像力をかきたてる劇的な闇",
      tags: ["#ヒヤッとする", "#ざわざわ", "#こわいのに見たい"],
      meaning: "画面の大半を暗闇で覆い、視線を照らされた一角へ集中させる。見えない部分を鑑賞者の想像力で補わせるドラマチックな手法。",
      episodes: [
        {
          vol: "vol.26",
          title: "【見えないから怖い】暗闇が想像力を刺激する仕掛け",
          url: "https://www.instagram.com/p/C_EXAMPLE2/",
          artists: ["カラヴァッジョ", "ジョルジュ・ド・ラ・トゥール", "レンブラント・ファン・レイン"]
        }
      ]
    },
    {
      key: "sacredlight", name: "聖なる光", icon: "sun", cat: "light",
      summary: "天から降り注ぐ奇跡の輝き",
      tags: ["#息を呑む", "#ゾクゾク", "#鳥肌が立つ"],
      meaning: "上空から差し込む一筋の眩しい光は、人知を超えた神聖さや奇跡を予感させる。光を浴びる人物が特別な存在であることを物語る。",
      episodes: [
        {
          vol: "vol.28",
          title: "【天から降り注ぐ光】神聖さと奇跡を予感させる演出",
          url: "https://www.instagram.com/p/C_EXAMPLE4/",
          artists: ["ラファエロ", "レオナルド・ダ・ヴィンチ", "レンブラント・ファン・レイン"]
        }
      ]
    },
    {
      key: "backlight", name: "逆光", icon: "sun", cat: "light",
      summary: "顔を影にしてドラマを語る輪郭",
      tags: ["#ゾクゾク", "#ハッとする", "#ミステリアス"],
      meaning: "被写体の後ろから光を当てることで顔を影にし、美しい輪郭を浮かび上がらせる。表情を隠すことで内面の感情を想像させる。",
      episodes: [
        {
          vol: "vol.29",
          title: "【シルエットが語るドラマ】逆光が魅せるミステリアスな感情",
          url: "https://www.instagram.com/p/C_EXAMPLE5/",
          artists: ["カスパー・ダーヴィト・フリードリヒ", "ジャン＝フランソワ・ミレー", "エドゥアール・マネ"]
        }
      ]
    },
    {
      key: "chiaroscuro", name: "劇的明暗", icon: "masks-theater", cat: "light",
      summary: "スポットライトが照らす緊張感",
      tags: ["#ハッとする", "#ドキドキ", "#圧倒される"],
      meaning: "光と影の差を激しくつけ、スポットライトを当てたような立体感を演出する。静かな絵が一瞬で緊張感あふれる舞台へと変える。",
      episodes: [
        {
          vol: "vol.27",
          title: "【光と影の激しいバトル】強烈な明暗対比で惹きつける劇的効果",
          url: "https://www.instagram.com/p/C_EXAMPLE3/",
          artists: ["アルテミシア・ジェンティレスキ", "フランシスコ・デ・ゴヤ", "カラヴァッジョ"]
        }
      ]
    },

    // --- 3. 筆致 (texture) ---
    {
      key: "flat", name: "平塗り", icon: "border-none", cat: "texture",
      summary: "筆跡を消したクリアな色の面",
      tags: ["#スッキリ", "#ハッとする", "#凛とする"],
      meaning: "筆跡や立体感を極限まで消し去った平らな色面。グラデーションに頼らず、形や境界線のクリアな美しさを際立たせる。"
    },
    {
      key: "brushstroke", name: "筆跡", icon: "paintbrush", cat: "texture",
      summary: "画家の熱量と動きを刻む痕跡",
      tags: ["#血が騒ぐ", "#ワクワク", "#テンションが上がる"],
      meaning: "筆を走らせた勢いや痕跡をあえて残す表現。画面の表面から画家の手の動きや一瞬の熱量をそのままダイレクトに体感できる。"
    },
    {
      key: "impasto", name: "厚塗り", icon: "fill-drip", cat: "texture",
      summary: "塗料の山が生みだす立体の影",
      tags: ["#ゾクゾク", "#圧倒される", "#生々しい"],
      meaning: "絵の具をキャンバスの上に立体的に盛り上げる技法。光が当たることで実際の影ができ、強烈な質感と存在感を生み出す。"
    },
    {
      key: "sfumato", name: "ぼかし", icon: "cloud", cat: "texture",
      summary: "煙のように溶け込むあやしい影",
      tags: ["#うっとり", "#吸い込まれそう", "#モヤモヤ"],
      meaning: "輪郭線をくっきり描かず、煙のように静かに色を重ねてぼかす技法。人物の表情に深みを与え、空気の質感そのものを表現する。",
      episodes: [
        {
          vol: "vol.23",
          title: "【溶け込む煙のような影】スフマート技法が生むミステリアスな輪郭",
          url: "https://www.instagram.com/p/C_EXAMPLE13/",
          artists: ["レオナルド・ダ・ヴィンチ", "ジョルジョーネ", "ジャン＝バティスト・カミーユ・コロー"]
        }
      ]
    },
    {
      key: "hyperdetail", name: "細密", icon: "eye", cat: "texture",
      summary: "写真を超える凄みの超精描法",
      tags: ["#息を呑む", "#ゾクゾク", "#鳥肌が立つ"],
      meaning: "毛穴や衣服の糸、金属の質感まで極限まで描き込む技法。写真以上の凄みで見る人を圧倒し、時間が静止した印象を与える。",
      episodes: [
        {
          vol: "vol.25",
          title: "【狂気を感じる細密さ】超精密描写が超えるリアルの境界",
          url: "https://www.instagram.com/p/C_EXAMPLE15/",
          artists: ["ヤン・ファン・エイク", "アルブレヒト・デューラー", "ハンス・ホルバイン"]
        }
      ]
    },
    {
      key: "splatter", name: "飛沫", icon: "paint-roller", cat: "texture",
      summary: "跳ねる絵の具と身体のエネルギー",
      tags: ["#ドキドキ", "#血が騒ぐ", "#ハッとする"],
      meaning: "絵の具を叩きつけたり散らしたりする激しいタッチ。画家の全身の運動がそのまま刻まれ、見る者の心を揺さぶるエネルギーを放つ。",
      episodes: [
        {
          vol: "vol.24",
          title: "【飛び散る絵の具のエネルギー】画家の身体運動が刻む圧倒的躍動",
          url: "https://www.instagram.com/p/C_EXAMPLE14/",
          artists: ["ジャクソン・ポロック", "白髪一雄", "フィンセント・ファン・ゴッホ"]
        }
      ]
    },

    // --- 4. 構図 (composition) ---
    {
      key: "horizon", name: "水平線", icon: "grip-lines", cat: "composition",
      summary: "画面を支える真っ直ぐな安定感",
      tags: ["#ホッとする", "#すっきり", "#広々"],
      meaning: "真っ直ぐな水平線は、画面に揺るぎない安定感と開放的な世界の広がりを感じさせる骨組みとなる。"
    },
    {
      key: "center", name: "中心配置", icon: "bullseye", cat: "composition",
      summary: "真ん中にすえて逃がさない主役",
      tags: ["#ハッとする", "#圧倒される", "#金縛り"],
      meaning: "画面の真ん中に主役をドカンと配置する構図。他の要素に目移りさせず、逃げ場のない圧倒的な存在感を主張する。"
    },
    {
      key: "triangle", name: "三角形", icon: "shapes", cat: "composition",
      summary: "永久の秩序をつくるどっしり感",
      tags: ["#ホッとする", "#ピタッとはまる", "#すっきり"],
      meaning: "画面の中に三角形の配置を作ることで、どっしりとした心理的安定感を与える。崩れることのない永久の秩序を表現する基本構図。",
      episodes: [
        {
          vol: "vol.18",
          title: "【揺るがない安定感】三角形がつくる完璧なバランス",
          url: "https://www.instagram.com/p/C_EXAMPLE7/",
          artists: ["ラファエロ", "レオナルド・ダ・ヴィンチ", "サンドロ・ボッティチェリ"]
        }
      ]
    },
    {
      key: "diagonal", name: "斜線", icon: "slash", cat: "composition",
      summary: "画面を切り裂くスピードと勢い",
      tags: ["#ドキドキ", "#スカッとする", "#ハッとする"],
      meaning: "斜めのラインを効果的に走らせることで、水平や垂直にはないスピード感と強い勢いを画面に与えるテクニック。",
      episodes: [
        {
          vol: "vol.20",
          title: "【画面を切り裂くナナメの線】スピードと躍動感の構図トリップ",
          url: "https://www.instagram.com/p/C_EXAMPLE9/",
          artists: ["葛飾北斎", "ウジェーヌ・ドラクロワ", "ティントレット"]
        }
      ]
    },
    {
      key: "goldenratio", name: "黄金比", icon: "compass-drafting", cat: "composition",
      summary: "理由なしに心地よい究極の比率",
      tags: ["#ピタッとはまる", "#なるほど", "#すっきり"],
      meaning: "自然界や建築にも見られる最も美しいとされる比率。数学的に計算された配置が、理由なしの心地よさを生み出す。"
    },
    {
      key: "onepoint", name: "一点透視", icon: "vector-square", cat: "composition",
      summary: "奥へ奥へと視線をすいこむ直線",
      tags: ["#引き込まれる", "#吸い込まれそう", "#スカッとする"],
      meaning: "すべての直線が遠くのひとつの点へ向かって集まる構図。視線を奥へと強力に引き込み、空間の深い臨場感を作り出す。",
      episodes: [
        {
          vol: "vol.17",
          title: "【吸い込まれる直線】遠近法が作る圧倒的な空間体験",
          url: "https://www.instagram.com/p/C_EXAMPLE6/",
          artists: ["レオナルド・ダ・ヴィンチ", "パオロ・ウッチェロ", "ピエロ・デラ・フランチェスカ"]
        }
      ]
    },
    {
      key: "depth", name: "奥行き", icon: "layer-group", cat: "composition",
      summary: "絵の中に現れる果てしない大空間",
      tags: ["#吸い込まれそう", "#広々", "#めまいがする"],
      meaning: "色彩のかすみや大小関係を利用して、平面のキャンバス上に無限に広がる奥深い大空間を作り出す技法。"
    },
    {
      key: "asymmetry", name: "崩し", icon: "scale-unbalanced", cat: "composition",
      summary: "バランスを破って生まれる動き",
      tags: ["#ざわざわ", "#ハッとする", "#落ち着かない"],
      meaning: "左右や上下のバランスをあえて崩す配置。安定を破ることで、画面に動きや予期せぬ緊張感を呼び起こす手法。",
      episodes: [
        {
          vol: "vol.19",
          title: "【あえて崩すアンバランス】不均衡が生み出す独特の不穏さ",
          url: "https://www.instagram.com/p/C_EXAMPLE8/",
          artists: ["葛飾北斎", "エドガー・ドガ", "エドゥアール・マネ"]
        }
      ]
    },
    {
      key: "framing", name: "枠取り", icon: "crop", cat: "composition",
      summary: "陰からのぞき見させる没入感",
      tags: ["#引き込まれる", "#ドキドキ", "#のぞき見"],
      meaning: "柱や窓枠などで主役を囲み込む構図。まるで陰からのぞき見をしているような没入感を鑑賞者にもたらす。",
      episodes: [
        {
          vol: "vol.21",
          title: "【切り取られた世界】フレーム構造が見せる視線トリック",
          url: "https://www.instagram.com/p/C_EXAMPLE10/",
          artists: ["フェリックス・ヴァロットン", "エドガー・ドガ", "ヨハネス・フェルメール"]
        }
      ]
    },
    {
      key: "crowd", name: "群衆", icon: "users", cat: "composition",
      summary: "画面をごった返させる圧倒的熱量",
      tags: ["#そわそわする", "#圧倒される", "#目がまわる"],
      meaning: "多くの人物を画面いっぱいにひしめき合わせる配置。視線を迷わせ、群衆が持つ圧倒的な熱気や混乱を表現する。",
      episodes: [
        {
          vol: "vol.22",
          title: "【ごった返す熱量】群衆の配置がつくる人間ドラマの波",
          url: "https://www.instagram.com/p/C_EXAMPLE12/",
          artists: ["ピーテル・ブリューゲル", "ペーター・パウル・ルーベンス", "バーネット・ニューマン"]
        }
      ]
    },

    // --- 5. からだ (mirror) ---
    {
      key: "hands", name: "指先", icon: "hand", cat: "mirror",
      summary: "顔よりも雄弁に本音をつぶやく手",
      tags: ["#ゾクッとする", "#ハッとする", "#胸がキュンとする"],
      meaning: "指先の微細な形や角度は、表情以上にその人の本音や祈りを語る。手を見るだけで人物のドラマを直感できる。",
      episodes: [
        {
          vol: "vol.6",
          title: "【顔より雄弁な手のポーズ】指先がつぶやく本音と感情",
          url: "https://www.instagram.com/p/C_EXAMPLE17/",
          artists: ["レオナルド・ダ・ヴィンチ", "エゴン・シーレ", "オーギュスト・ロダン"]
        }
      ]
    },
    {
      key: "stretch", name: "伸び", icon: "person-rays", cat: "mirror",
      summary: "身体を大きく伸ばす解放の快感",
      tags: ["#スカッとする", "#軽やか", "#気持ちいい"],
      meaning: "大きく体を伸ばしたり湾曲させた人物ポーズは、解剖学を超えた心地よさや開放感を見る側にも呼び起こす。",
      episodes: [
        {
          vol: "vol.10",
          title: "【伸び切った身体の快感】解剖学を超えたポーズの心地よさ",
          url: "https://www.instagram.com/p/C_EXAMPLE22/",
          artists: ["エル・グレコ", "アメデオ・モディリアーニ", "アンリ・マティス"]
        }
      ]
    },
    {
      key: "languid", name: "脱力", icon: "bed", cat: "mirror",
      summary: "緊張が解けてダラリ重いカラダ",
      tags: ["#力がぬける", "#まったり", "#ほっこり"],
      meaning: "だらりと力を抜いたポーズや重たい身体。眠りや疲労など、全身の緊張がほぐれきったリラックス感を伝えてくる。"
    },
    {
      key: "embrace", name: "抱擁", icon: "hands-holding-child", cat: "mirror",
      summary: "強い愛と逃げられない束縛のポーズ",
      tags: ["#胸が痛む", "#切ない", "#うっとり"],
      meaning: "人を強く抱きしめるポーズは、愛情の深さと同時に逃げられない束縛という複雑な感情を身体感覚として伝える。",
      episodes: [
        {
          vol: "vol.9",
          title: "【愛か束縛か】抱きしめる身体が放つ複雑なサイン",
          url: "https://www.instagram.com/p/C_EXAMPLE21/",
          artists: ["グスタフ・クリムト", "エドヴァルド・ムンク", "エゴン・シーレ"]
        }
      ]
    },
    {
      key: "gaze", name: "視線", icon: "eye", cat: "mirror",
      summary: "思わず目線をたどってしまう誘惑",
      tags: ["#ハッとする", "#ゾクッとする", "#目が離せない"],
      meaning: "描かれた人々が一斉に向ける目線につられて、鑑賞者もその先を探してしまう。人間の本能を利用した視線の誘導。",
      episodes: [
        {
          vol: "vol.8",
          title: "【目が離せない視線の先】目線の連鎖がつくる物語の導線",
          url: "https://www.instagram.com/p/C_EXAMPLE20/",
          artists: ["ディエゴ・ベラスケス", "エドゥアール・マネ", "パオロ・ヴェロネーゼ"]
        }
      ]
    },
    {
      key: "facingaway", name: "背中", icon: "user-slash", cat: "mirror",
      summary: "絵の世界へ引き込む後ろ姿",
      tags: ["#切ない", "#引き込まれる", "#しんみり"],
      meaning: "鑑賞者に背を向けた人物は私たちの身代わりとなる。同じ景色を共有することで、一気に絵の世界へ自分の意識が入る。",
      episodes: [
        {
          vol: "vol.7",
          title: "【背中が語る哀愁】見つめる後ろ姿に没入する心理",
          url: "https://www.instagram.com/p/C_EXAMPLE18/",
          artists: ["カスパー・ダーヴィト・フリードリヒ", "ヴィルヘルム・ハンマースホイ", "ジョン・シンガー・サージェント"]
        }
      ]
    },
    {
      key: "pain", name: "痛み", icon: "heart-crack", cat: "mirror",
      summary: "自分まで胸が痛む身体的な共感",
      tags: ["#ヒヤッとする", "#胸が痛む", "#ゾクゾク"],
      meaning: "傷ついた身体や苦痛に耐える顔を見ると、自分まで胸が痛む感覚になる。脳が自動的に同じ体験として重ね合わせるため。",
      episodes: [
        {
          vol: "vol.5",
          title: "【見てるだけで痛い！】身体感覚に直撃する痛みの表現",
          url: "https://www.instagram.com/p/C_EXAMPLE16/",
          artists: ["ケーテ・コルヴィッツ", "フリーダ・カーロ", "パブロ・ピカソ"]
        }
      ]
    },
    {
      key: "silence", name: "沈黙", icon: "comment-slash", cat: "mirror",
      summary: "会話のない部屋に漂う重い空気",
      tags: ["#モヤモヤ", "#気まずい", "#冷や汗"],
      meaning: "視線が噛み合わない人々を描くことで、言葉のない冷たい空気感を伝える。身体の距離感が重い関係性をリアルに表す。",
      episodes: [
        {
          vol: "vol.4",
          title: "【沈黙の重さ】気まずい空気の描き方と心理的距離",
          url: "https://www.instagram.com/p/C_EXAMPLE19/",
          artists: ["ファン・ゴッホ", "エドガー・ドガ", "ピエール・ボナール"]
        }
      ]
    },

    // --- 6. ギャップ (gap) ---
    {
      key: "deform", name: "歪み", icon: "wand-magic-sparkles", cat: "gap",
      summary: "現実からずらして脳を惑わす形",
      tags: ["#ざわざわ", "#モヤモヤ", "#なにかおかしい"],
      meaning: "人体や空間の比率を現実からあえて歪める表現。見慣れた形との落差が心地よい違和感を生み、記憶に刻まれる。",
      episodes: [
        {
          vol: "vol.13",
          title: "【現実にはない歪み】違和感がつくる強烈な視覚的フック",
          url: "https://www.instagram.com/p/C_EXAMPLE25/",
          artists: ["ポール・セザンヌ", "パブロ・ピカソ", "エル・グレコ"]
        }
      ]
    },
    {
      key: "grid", name: "反復", icon: "border-all", cat: "gap",
      summary: "くり返しが脳をバグらせる罠",
      tags: ["#クラクラする", "#目がまわる", "#バグる"],
      meaning: "同じ形やパターンが幾重にも繰り返される仕掛け。視覚的なリズムを生むと同時に、脳をフリーズさせるギャップを作る。",
      episodes: [
        {
          vol: "vol.31",
          title: "【おそろしい変なリズム】同じマークのくり返しが脳をバグらせる",
          url: "https://www.instagram.com/p/C_EXAMPLE11/",
          artists: ["アンディ・ウォーホル", "草間彌生", "ブリジット・ライリー"]
        }
      ]
    },
    {
      key: "stillmotion", name: "静と動", icon: "bolt", cat: "gap",
      summary: "止まった絵にひそむ激しい予感",
      tags: ["#ゾクッとする", "#息を呑む", "#ハッとする"],
      meaning: "止まった画面の中で、なびく衣服や滴る水滴が次の瞬間の動きを予感させる。静けさと激しさの対比が印象を残す。",
      episodes: [
        {
          vol: "vol.12",
          title: "【一瞬に凝縮された永遠】静止画の中に潜む激しい動の予感",
          url: "https://www.instagram.com/p/C_EXAMPLE24/",
          artists: ["ジャン・ロレンツォ・ベルニーニ", "エドガー・ドガ", "テオドール・ジェリコー"]
        }
      ]
    },
    {
      key: "float", name: "浮遊感", icon: "feather", cat: "gap",
      summary: "重力を忘れさせる空中ふわふわ感",
      tags: ["#ふわふわ", "#軽やか", "#スカッとする"],
      meaning: "重い塗料で描かれているのに、空中に浮いているように見える錯覚。現実の重力ルールを忘れさせる感覚を生む。",
      episodes: [
        {
          vol: "vol.16",
          title: "【重力から解き放たれる】浮遊感が与える幻想的な解放感",
          url: "https://www.instagram.com/p/C_EXAMPLE28/",
          artists: ["マルク・シャガール", "ジョヴァンニ・バッティスタ・ティエポロ", "ケーテ・コルヴィッツ"]
        }
      ]
    },
    {
      key: "ruins", name: "廃墟", icon: "monument", cat: "gap",
      summary: "崩れた形が教えてくれる滅びの美",
      tags: ["#切ない", "#ぞわぞわ", "#うっとり"],
      meaning: "栄えた建物が崩れ去った姿は、寂しさと美しさという真逆の感情を起こさせる。時間の儚さがあるからこそ惹きつけられる。",
      episodes: [
        {
          vol: "vol.11",
          title: "【滅びの美学】廃墟が教えてくれる儚さと美しさのギャップ",
          url: "https://www.instagram.com/p/C_EXAMPLE23/",
          artists: ["ジョヴァンニ・バッティスタ・ピラネージ", "ウベール・ロベール", "カスパー・ダーヴィト・フリードリヒ"]
        }
      ]
    },
    {
      key: "lifeanddeath", name: "生命感", icon: "heart-pulse", cat: "gap",
      summary: "物質の絵の具にやどる生々しい息吹",
      tags: ["#ゾクゾク", "#鳥肌が立つ", "#生々しい"],
      meaning: "ただのキャンバスと絵の具なのに、まるで息をして動き出しそうな生々しさを感じる、物質と命の間のギャップ。",
      episodes: [
        {
          vol: "vol.15",
          title: "【まるで生きているよう】無機質な物質に宿る生々しい生命感",
          url: "https://www.instagram.com/p/C_EXAMPLE27/",
          artists: ["ジャン・ロレンツォ・ベルニーニ", "カラヴァッジョ", "フィンセント・ファン・ゴッホ"]
        }
      ]
    },
    {
      key: "beautyfear", name: "美と恐怖", icon: "skull", cat: "gap",
      summary: "完璧な美しさの裏に潜むおそろしさ",
      tags: ["#ゾクゾク", "#ヒヤッとする", "#こわいのに見たい"],
      meaning: "美しく完璧な絵の中に、おそろしい事件や悲劇が潜む描写。美と恐怖の激しい落差が、心に強い刺激を与える。",
      episodes: [
        {
          vol: "vol.14",
          title: "【美しすぎて怖い】綺麗な画面の裏に隠されたおそろしいギャップ",
          url: "https://www.instagram.com/p/C_EXAMPLE26/",
          artists: ["ペーター・パウル・ルーベンス", "ギュスターヴ・モロー", "ジョン・エヴァレット・ミレイ"]
        }
      ]
    }
  ]
};