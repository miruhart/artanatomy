// Stage1の中身：視覚のしかけカテゴリ・全サブ要素・感情マッピング・CSV記載の漫画30話限定紐付け版（完全双方向同期版）
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
      name: "矛盾",
      icon: "masks-theater",
      meaning: "美しさと恐ろしさのように、正反対の要素がひとつの絵に混ざり合うと、頭の整理が追いつかなくなる。見る人の予想を裏切ることで、目が離せない強い印象を残す。"
    }
  ],

  emotions: [
    {
      key: "immersed", name: "没入・安心", sub: "包み込まれる世界", icon: "water", bg: "var(--green)", short: "うっとり",
      words: ["うっとり", "まったり", "ホッとする", "引き込まれる", "静まる", "包まれる"],
      mechanism: "やわらかい色や穏やかな空間の中にいると、心拍数が落ち着いて、まるでその世界に溶け込んだような気分になる。",
      subs: ["blue", "white", "gradation", "softlight", "moonlight", "sfumato", "horizon", "depth", "framing", "hands", "embrace", "facingaway", "silence"]
    },
    {
      key: "awe", name: "畏敬・圧倒", sub: "とてつもない美しさ", icon: "mountain", bg: "var(--blue)", short: "ゾクゾク",
      words: ["ぞわぞわ", "ゾクゾク", "息を呑む", "鳥肌が立つ", "圧倒される", "めまいがする"],
      mechanism: "自分の力じゃとてもかなわないくらい大きいもの、細かいもの、神々しいものに出会うと、ちょっと怖いけど感動して鳥肌が立つ。",
      subs: ["black", "gold", "darkness", "sacredlight", "backlight", "chiaroscuro", "impasto", "hyperdetail", "depth", "center", "stillmotion", "ruins", "lifeanddeath", "beautyfear"]
    },
    {
      key: "excite", name: "興奮・活力", sub: "エネルギー", icon: "fire", bg: "var(--mustard)", short: "ドキドキ",
      words: ["ドキドキ", "ワクワク", "ハッとする", "血が騒ぐ", "テンションが上がる", "そわそわする"],
      mechanism: "はっきりした色や、いきおいのある筆づかいを見ると、体がびっくりして気分が盛り上がる。",
      subs: ["red", "yellow", "orange", "warmcool", "chiaroscuro", "brushstroke", "impasto", "splatter", "diagonal", "crowd", "lifeanddeath"]
    },
    {
      key: "unease", name: "違和感・不安", sub: "不気味", icon: "eye", bg: "var(--pink)", short: "ざわざわ",
      words: ["ざわざわ", "ヒヤッとする", "なにかおかしい", "不気味", "落ち着かない", "モヤモヤ"],
      mechanism: "「なんかヘンだな」「暗くて見えないな」という部分があると、脳が「危険かもしれない！」と警戒して緊張する。",
      subs: ["green", "black", "purple", "moonlight", "darkness", "backlight", "asymmetry", "crowd", "gaze", "facingaway", "pain", "silence", "deform", "grid", "ruins", "beautyfear"]
    },
    {
      key: "relaxed", name: "解放・爽快", sub: "解き放たれる", icon: "wind", bg: "var(--green)", short: "すっきり",
      words: ["すっきり", "開放感", "スカッとする", "風を感じる", "軽やか", "広々"],
      mechanism: "大きな空やまっすぐ伸びる道を見ると、身体の緊張が緩んで、呼吸が深くなる。",
      subs: ["blue", "green", "white", "silver", "gradation", "softlight", "horizon", "onepoint", "stretch", "languid", "float"]
    },
    {
      key: "intellectual", name: "知的快感", sub: "謎解きの面白さ", icon: "puzzle-piece", bg: "var(--mustard)", short: "なるほど！",
      words: ["なるほど！", "アハ体験", "伏線回収", "ピタッとはまる", "ゾクッとする発見", "スッキリ"],
      mechanism: "バラバラに見えていた要素が、画家の仕掛け（ルール）に気づいた瞬間に「1つの理由」でつながり、脳の中で快感物質が出る。",
      subs: ["silver", "complementary", "flat", "sfumato", "hyperdetail", "center", "triangle", "goldenratio", "onepoint", "framing", "hands", "gaze", "deform", "grid", "stillmotion"]
    }
  ],

  subs: [
    // --- 1. 色 (color) ---
    {
      key: "red", name: "赤", icon: "droplet", cat: "color",
      emotions: ["excite"],
      swatch: "#e5484d",
      summary: "脈拍をあげる情熱と命の色",
      image: "red",
      tags: ["#ドキドキ", "#血が騒ぐ", "#テンションが上がる", "#危険"],
      meaning: "赤は血や火を連想させる強い色。見つめるだけで人の脈拍が上がり、主役の激しい感情や一番目立たせたい場所を印象づける。",
      episodes: [
        {
          vol: "vol.5",
          title: "なぜ「赤」を見ると、頭で考えるより先にドキドキしちゃうの？",
          url: "#",
          artists: ["アンリ・マティス", "葛飾北斎", "マーク・ロスコ"]
        }
      ]
    },
    {
      key: "blue", name: "青", icon: "water", cat: "color",
      emotions: ["immersed", "relaxed"],
      swatch: "#3b6fd4",
      summary: "心をなだめる深い静寂と広がり",
      image: "blue",
      tags: ["#うっとり", "#引き込まれる", "#心が鎮まる", "#広々"],
      meaning: "青は空や海、広大な宇宙を連想させ、心を穏やかに鎮める色。絵画では深い静けさや孤独、奥へ引き込まれる奥行き感を演出する。",
      episodes: [
        {
          vol: "vol.14",
          title: "昼と夜のあいだの時間。うす暗い青い世界に、なぜドキドキと懐かしさを感じるの？",
          url: "#",
          artists: ["歌川広重", "ジェームズ・マクニール・ホイッスラー", "ルネ・マグリット"]
        },
        {
          vol: "vol.21",
          title: "吸い込まれる青。吸い込まれそうな深い青を見ると、なぜ胸がキュンと切なくなるの？",
          url: "#",
          artists: ["ディエゴ・ベラスケス", "クロード・モネ", "イヴ・クライン"]
        }
      ]
    },
    {
      key: "yellow", name: "黄", icon: "sun", cat: "color",
      emotions: ["excite"],
      swatch: "#ffd400",
      summary: "脳を直撃する希望と光の合図",
      tags: ["#ワクワク", "#ハッとする", "#テンションが上がる"],
      image: "yellow",
      meaning: "黄色は自然界の太陽や実りを象徴し、脳へ素早く届く明るい色。一滴あるだけで画面に希望や喜びをもたらし、強い注目を集める。"
    },
    {
      key: "green", name: "緑", icon: "leaf", cat: "color",
      emotions: ["relaxed", "unease"],
      swatch: "#4caf6a",
      summary: "光ひとつで豹変する安心と不気味な色",
      image: "green",
      tags: ["#ざわざわ", "#毒気", "#ホッとする", "#ヒヤッとする"],
      meaning: "緑は自然の象徴であり、本来は人が最も心を許す安心の色。しかし異質な光や影と組み合わさると「見慣れたはずのものが怪しくなる」という脳の警戒スイッチが入り、一転して毒気や不気味さに豹変する。",
      episodes: [
        {
          vol: "vol.26",
          title: "あやしい緑。やさしいはずの「みどり色」が、なぜ時にお化け屋敷みたいに怖く見えるの？",
          url: "#",
          artists: ["ジョン・エヴァレット・ミレイ", "アンリ・ルソー", "エドガー・ドガ"]
        }
      ]
    },
    {
      key: "black", name: "黒", icon: "moon", cat: "color",
      emotions: ["awe", "unease"],
      swatch: "#1a1a1a",
      summary: "未知の恐怖と画面を締める闇",
      tags: ["#圧倒される", "#ヒヤッとする", "#ゾクゾク"],
      meaning: "すべての光を吸収する黒は、絶望や未知への恐怖を象徴する色。隣り合う他の色を引き立て、画面の輪郭を強く引き締める。"
    },
    {
      key: "white", name: "白", icon: "snowflake", cat: "color",
      emotions: ["immersed", "relaxed"],
      swatch: "#ffffff",
      summary: "神聖さと無限の空白",
      tags: ["#ホッとする", "#心が洗われる", "#すっきり", "#静まる"],
      meaning: "汚れのない白は、神聖さや純粋さ、無限の空白を感じさせる色。周囲の色を引き立てるベースとなり、静寂の緊張感も生み出す。",
      episodes: [
        {
          vol: "vol.33",
          title: "まっ白な世界。何もかも真っ白な絵を見つめると、なぜ頭の中がシーーンと静かになるの？",
          url: "#",
          artists: ["ジェームズ・マクニール・ホイッスラー", "クロード・モネ", "カジミール・マレーヴィチ"]
        }
      ]
    },
    {
      key: "orange", name: "オレンジ", icon: "fire", cat: "color",
      emotions: ["excite"],
      swatch: "#ff8a3d",
      summary: "人肌の温もりと太陽の活気",
      tags: ["#ワクワク", "#ほっこり", "#テンションが上がる"],
      meaning: "赤の熱量と黄色の明るさをあわせ持ったオレンジは、夕焼けのように心を温める。人肌の温もりや活気あふれる陽気さを与える。"
    },
    {
      key: "purple", name: "紫", icon: "eye", cat: "color",
      emotions: ["unease"],
      swatch: "#8b5fbf",
      summary: "熱と冷たさが同居する妖しさ",
      tags: ["#ざわざわ", "#モヤモヤ", "#ミステリアス"],
      meaning: "情熱の赤と静寂の青が混ざり合うミステリアスな色。相反する感情が同居するため、観る者の心に妖しい揺らぎやもやもやを生み出す。"
    },
    {
      key: "gold", name: "金", icon: "sparkles", cat: "color",
      emotions: ["awe"],
      swatch: "linear-gradient(135deg,#f6e27a,#c9a227)",
      summary: "現実を消し去る非現実の光",
      tags: ["#息を呑む", "#圧倒される", "#吸い込まれそう"],
      meaning: "光を弾く金の背景は現実の距離感を失わせる。影のない平面の輝きが見る者を吸い込み、異次元の神聖な世界へと誘う。",
      episodes: [
        {
          vol: "vol.18",
          title: "ギラギラの金色。まぶしい金色の絵の前に立つと、なぜ「別の世界」に吸い込まれそうな気がするの？",
          url: "#",
          artists: ["グスタフ・クリムト", "俵屋宗達", "アンディ・ウォーホル"]
        }
      ]
    },
    {
      key: "silver", name: "銀", icon: "snowflake", cat: "color",
      emotions: ["relaxed", "intellectual"],
      swatch: "linear-gradient(135deg,#f2f2f2,#a8a8a8)",
      summary: "冴えわたる知性と冷たい気品",
      tags: ["#凛とする", "#すっきり", "#静まる"],
      meaning: "派手な自己主張を抑えた金属的な輝きを持つ色。血の通った温もりを削ぎ落とし、静寂の中で冴え渡る知性と緊張感をもたらす。"
    },
    {
      key: "warmcool", name: "暖色・寒色", icon: "temperature-half", cat: "color",
      emotions: ["excite"],
      swatch: "linear-gradient(90deg, #e5484d, #3b6fd4)",
      image: "warmcool",
      summary: "温度の感覚で感情を揺さぶる",
      tags: ["#ドキドキ", "#ハッとする", "#テンションが上がる"],
      meaning: "温もりを感じる暖色とひんやり冷たい寒色。色が持つ温度の感覚が、見る人の身体感覚や感情をダイレクトに揺さぶる。"
    },
    {
      key: "complementary", name: "補色", icon: "circle-half-stroke", cat: "color",
      emotions: ["intellectual"],
      swatch: "linear-gradient(90deg, #e5484d, #4caf6a)",
      summary: "反対の色が引き立てあう魔法",
      tags: ["#ハッとする", "#ピタッとはまる", "#なるほど！"],
      meaning: "赤と緑、青とオレンジなど反対側の色を隣り合わせる技法。お互いの色を限界まで鮮やかに際立たせ、視覚的なアハ体験を生む。",
      episodes: [
        {
          vol: "vol.17",
          title: "色のつぶつぶ。混ぜずに並べた絵の具の点が、なぜ頭の中でキラキラ光り出すの？",
          url: "#",
          artists: ["ジョルジュ・スーラ", "ロイ・リキテンスタイン", "名和 晃平"]
        }
      ]
    },
    {
      key: "gradation", name: "空の色", icon: "cloud-sun", cat: "color",
      emotions: ["immersed", "relaxed"],
      swatch: "linear-gradient(180deg, #ff8a3d, #8b5fbf)",
      summary: "運命を暗示するグラデーション",
      tags: ["#うっとり", "#引き込まれる", "#しんみり"],
      meaning: "刻一刻と変化する空のグラデーションは、作品全体の空気感や登場人物の運命を暗示し、画面のムードを一気に決める。",
      episodes: [
        {
          vol: "vol.14",
          title: "昼と夜のあいだの時間。うす暗い青い世界に、なぜドキドキと懐かしさを感じるの？",
          url: "#",
          artists: ["歌川広重", "ジェームズ・マクニール・ホイッスラー", "ルネ・マグリット"]
        },
        {
          vol: "vol.30",
          title: "あやしい空。背景の「雲の形」が変わるだけで、なぜ物語がガラリと変わるの？",
          url: "#",
          artists: ["J.M.W.ターナー", "エル・グレコ", "エドヴァルド・ムンク"]
        }
      ]
    },

    // --- 2. 光と影 (light) ---
    {
      key: "softlight", name: "柔らかな光", icon: "cloud-sun", cat: "light",
      emotions: ["immersed", "relaxed"],
      summary: "木漏れ日のような優しい包容力",
      tags: ["#うっとり", "#ホッとする", "#まったり", "#包まれる"],
      image: "softlight",
      meaning: "窓辺の木漏れ日や薄曇りの自然光。強い明暗を作らないおだやかな光線が、静かで優しく包み込むような空気感を作り出す。",
      episodes: [
        {
          vol: "vol.15",
          title: "いつもの毎日。ただコップに牛乳を注ぐだけのようなシーンが、なぜ特別な宝物に見えるの？",
          url: "#",
          artists: ["ヨハネス・フェルメール", "ジャン・シメオン・シャルダン", "ヴィルヘルム・ハンマースホイ"]
        }
      ]
    },
    {
      key: "moonlight", name: "月光", icon: "moon", cat: "light",
      emotions: ["immersed", "unease"],
      summary: "夜の静けさと秘密の時間",
      image: "moonlight",
      tags: ["#しんみり", "#ざわざわ", "#静まる"],
      meaning: "青白く静かに照らす月明かりやランタンの灯火は、心を落ち着かせる反面、暗闇の影が生みだす密かな不安や謎めいた雰囲気を漂わせる。"
    },
    {
      key: "darkness", name: "暗闇", icon: "moon", cat: "light",
      emotions: ["awe", "unease"],
      summary: "想像力をかきたてる劇的な闇",
      tags: ["#ヒヤッとする", "#ざわざわ", "#息を呑む"],
      meaning: "画面の大半を暗闇で覆い、視線を照らされた一角へ集中させる。見えない部分を鑑賞者の想像力で補わせるドラマチックな手法。",
      episodes: [
        {
          vol: "vol.6",
          title: "夜の街の明かり。まぶしい光のそばにいると、どうして寂しくなるの？",
          url: "#",
          artists: ["ファン・ゴッホ", "エドワード・ホッパー", "エドゥアール・マネ"]
        }
      ]
    },
    {
      key: "sacredlight", name: "聖なる光", icon: "sun", cat: "light",
      emotions: ["awe", "immersed"],
      summary: "天から降り注ぐ奇跡の輝き",
      tags: ["#息を呑む", "#ゾクゾク", "#鳥肌が立つ"],
      meaning: "上空から差し込む一筋の眩しい光は、人知を超えた神聖さや奇跡を予感させる。光を浴びる人物が特別な存在であることを物語る。",
      episodes: [
        {
          vol: "vol.15",
          title: "いつもの毎日。ただコップに牛乳を注ぐだけのようなシーンが、なぜ特別な宝物に見えるの？",
          url: "#",
          artists: ["ヨハネス・フェルメール", "ジャン・シメオン・シャルダン", "ヴィルヘルム・ハンマースホイ"]
        },
        {
          vol: "vol.19",
          title: "雲のすきまからの光。真っ暗な空から差し込む光の筋に、なぜ私たちはホッとするの？",
          url: "#",
          artists: ["シャルル・ルブラン", "ユリウス・フォン・クレーファー", "ジェームズ・タレル"]
        }
      ]
    },
    {
      key: "backlight", name: "逆光", icon: "sun", cat: "light",
      emotions: ["awe", "unease"],
      summary: "顔を影にしてドラマを語る輪郭",
      tags: ["#ハッとする", "#ミステリアス", "#ざわざわ"],
      meaning: "被写体の後ろから光を当てることで顔を影にし、美しい輪郭を浮かび上がらせる。表情を隠すことで内面の感情を想像させる。"
    },
    {
      key: "chiaroscuro", name: "劇的明暗", icon: "masks-theater", cat: "light",
      emotions: ["awe", "excite"],
      summary: "スポットライトが照らす緊張感",
      tags: ["#息を呑む", "#ドキドキ", "#圧倒される"],
      image: "chiaroscuro",
      meaning: "光と影の差を激しくつけ、スポットライトを当てたような立体感を演出する。静かな絵を一瞬で緊張感あふれる舞台へと変える。",
      episodes: [
        {
          vol: "vol.32",
          title: "真っ暗闇とライト。暗闇の中にピカッと光る場所があると、なぜそこに目が引き寄せられるの？",
          url: "#",
          artists: ["カラヴァッジョ", "ジョルジュ・ド・ラ・トゥール", "レンブラント・ファン・レイン"]
        }
      ]
    },

    // --- 3. 筆致 (texture) ---
    {
      key: "flat", name: "平塗り", icon: "border-none", cat: "texture",
      emotions: ["intellectual"],
      summary: "筆跡を消したクリアな色の面",
      tags: ["#スッキリ", "#ピタッとはまる", "#凛とする"],
      meaning: "筆跡や立体感を極限まで消し去った平らな色面。グラデーションに頼らず、形や境界線のクリアな構造美を強調する。"
    },
    {
      key: "brushstroke", name: "筆跡", icon: "paintbrush", cat: "texture",
      emotions: ["excite"],
      summary: "画家の熱量と動きを刻む痕跡",
      tags: ["#血が騒ぐ", "#ワクワク", "#テンションが上がる"],
      meaning: "筆を走らせた勢いや痕跡をあえて残す表現。画面の表面から画家の手の動きや一瞬の熱量をそのままダイレクトに体感できる。",
      episodes: [
        {
          vol: "vol.22",
          title: "あばれる体。ぐちゃぐちゃにぶちまけられた絵の具から、なぜ画家のエネルギーが伝わってくるの？",
          url: "#",
          artists: ["フィンセント・ファン・ゴッホ", "ジャクソン・ポロック", "フランツ・クライン"]
        }
      ]
    },
    {
      key: "impasto", name: "厚塗り", icon: "fill-drip", cat: "texture",
      emotions: ["awe", "excite"],
      summary: "塗料の山が生みだす立体の影",
      tags: ["#ゾクゾク", "#圧倒される", "#生々しい"],
      image: "impasto",
      meaning: "絵の具をキャンバスの上に立体的に盛り上げる技法。光が当たることで実際の影ができ、強烈な質感と存在感を生み出す。",
      episodes: [
        {
          vol: "vol.13",
          title: "ボコボコした絵の具。見るだけなのに、なぜ肌に直接さわられているみたいにゾワゾワするの？",
          url: "#",
          artists: ["レンブラント・ファン・レイン", "フィンセント・ファン・ゴッホ", "ゲルハルト・リヒター"]
        }
      ]
    },
    {
      key: "sfumato", name: "ぼかし", icon: "cloud", cat: "texture",
      emotions: ["intellectual", "immersed"],
      summary: "煙のように溶け込み、想像力を試す影",
      tags: ["#うっとり", "#なるほど！", "#モヤモヤ"],
      image: "sfumato",
      meaning: "輪郭線をくっきり描かず、煙のように静かに境界を溶かす技法。あえて曖昧にすることで脳が深く観察し想像で補おうとするため、深い没入感と知的な味わいが生まれる。"
    },
    {
      key: "hyperdetail", name: "点と集積", icon: "eye", cat: "texture",
      emotions: ["awe", "intellectual"],
      summary: "小さなつぶつぶが集まって生まれる輝き",
      tags: ["#息を呑む", "#アハ体験", "#なるほど！"],
      meaning: "ひとつひとつの小さな点や粒子を並べ、密に集める表現。近くで見ると単なるつぶつぶなのに、離れて見ると脳内で色が統合され、圧倒的なスケールや光として結像する。",
      episodes: [
        {
          vol: "vol.17",
          title: "色のつぶつぶ。混ぜずに並べた絵の具の点が、なぜ頭の中でキラキラ光り出すの？",
          url: "#",
          artists: ["ジョルジュ・スーラ", "ロイ・リキテンスタイン", "名和 晃平"]
        }
      ]
    },
    {
      key: "splatter", name: "飛沫", icon: "paint-roller", cat: "texture",
      emotions: ["excite"],
      summary: "跳ねる絵の具と身体のエネルギー",
      tags: ["#ドキドキ", "#血が騒ぐ", "#ハッとする"],
      meaning: "絵の具を叩きつけたり散らしたりする激しいタッチ。画家の全身の運動がそのまま刻まれ、見る者の心を揺さぶるエネルギーを放つ。",
      episodes: [
        {
          vol: "vol.22",
          title: "あばれる体。ぐちゃぐちゃにぶちまけられた絵の具から、なぜ画家のエネルギーが伝わってくるの？",
          url: "#",
          artists: ["フィンセント・ファン・ゴッホ", "ジャクソン・ポロック", "フランツ・クライン"]
        }
      ]
    },

    // --- 4. 構図 (composition) ---
    {
      key: "horizon", name: "水平線", icon: "grip-lines", cat: "composition",
      emotions: ["relaxed", "immersed"],
      summary: "画面を支える真っ直ぐな安定感",
      tags: ["#ホッとする", "#すっきり", "#広々", "#包まれる"],
      image: "horizon",
      meaning: "真っ直ぐな水平線は、画面に揺るぎない安定感と開放的な世界の広がりを感じさせる骨組みとなる。",
      episodes: [
        {
          vol: "vol.24",
          title: "まっすぐな線と四角。きっちり並んだ模様を見ると、なぜ心がスーッと落ち着くの？",
          url: "#",
          artists: ["ピート・モンドリアン", "カジミール・マレーヴィチ", "ソル・ウィット"]
        }
      ]
    },
    {
      key: "center", name: "中心配置", icon: "bullseye", cat: "composition",
      emotions: ["awe", "intellectual"],
      summary: "真ん中にすえて逃がさない主役",
      tags: ["#ハッとする", "#圧倒される", "#なるほど！"],
      image: "center",
      meaning: "画面の真ん中に主役をドカンと配置する構図。他の要素に目移りさせず視線をロックし、逃げ場のない圧倒的な存在感を主張する。",
      episodes: [
        {
          vol: "vol.29",
          title: "街のポスター。通り過ぎる人の目を一瞬でパッと奪う、デザインのワナって？",
          url: "#",
          artists: ["アンリ・ド・トゥールーズ＝ロートレック", "アルフォンス・ミュシャ", "A.M.カッサンドル"]
        }
      ]
    },
    {
      key: "triangle", name: "三角形", icon: "shapes", cat: "composition",
      emotions: ["intellectual"],
      summary: "永久の秩序をつくるどっしり感",
      tags: ["#ホッとする", "#ピタッとはまる", "#すっきり"],
      meaning: "画面の中に三角形の配置を作ることで、どっしりとした心理的安定感を与える。崩れることのない永久の秩序を表現する基本構図。"
    },
    {
      key: "diagonal", name: "斜線", icon: "slash", cat: "composition",
      emotions: ["excite"],
      summary: "画面を切り裂くスピードと勢い",
      tags: ["#ドキドキ", "#スカッとする", "#ハッとする"],
      image: "diagonal",
      meaning: "斜めのラインを効果的に走らせることで、水平や垂直にはないスピード感と強い勢いを画面に与えるテクニック。"
    },
    {
      key: "goldenratio", name: "黄金比", icon: "compass-drafting", cat: "composition",
      emotions: ["intellectual"],
      summary: "理由なしに心地よい究極の比率",
      tags: ["#ピタッとはまる", "#なるほど！", "#すっきり"],
      image: "goldenratio",
      meaning: "自然界や建築にも見られる最も美しいとされる比率。数学的に計算された配置が、理由なしの心地よさと美しい秩序を生み出す。"
    },
    {
      key: "onepoint", name: "一点透視", icon: "vector-square", cat: "composition",
      emotions: ["relaxed", "intellectual"],
      summary: "奥へ奥へと視線をすいこむ直線",
      tags: ["#引き込まれる", "#スカッとする", "#なるほど！"],
      meaning: "すべての直線が遠くのひとつの点へ向かって集まる構図。視線を奥へと強力に引き込み、構造的な快感と空間の臨場感を作る。",
      episodes: [
        {
          vol: "vol.28",
          title: "吸い込まれる目線。絵の中の「たったひとつの点」に、なぜ目が釘付けになっちゃうの？",
          url: "#",
          artists: ["ラファエロ・サンティ", "ヨハネス・フェルメール", "エドワード・ホッパー"]
        }
      ]
    },
    {
      key: "depth", name: "奥行き", icon: "layer-group", cat: "composition",
      emotions: ["immersed", "awe"],
      summary: "絵の中に現れる果てしない大空間",
      tags: ["#引き込まれる", "#広々", "#圧倒される"],
      meaning: "色彩のかすみや大小関係を利用して、平面のキャンバス上に無限に広がる奥深い大空間を作り出す技法。",
      episodes: [
        {
          vol: "vol.9",
          title: "目の前の絵の中に、なぜ現実よりも広い空間を感じてしまうの？",
          url: "#",
          artists: ["ピエトロ・ペルジーノ", "バルトロメ・エステバン・ムリーリョ", "ピエール＝オーギュスト・ルノワール"]
        },
        {
          vol: "vol.21",
          title: "吸い込まれる青。吸い込まれそうな深い青を見ると、なぜ胸がキュンと切なくなるの？",
          url: "#",
          artists: ["ディエゴ・ベラスケス", "クロード・モネ", "イヴ・クライン"]
        }
      ]
    },
    {
      key: "asymmetry", name: "崩し", icon: "scale-unbalanced", cat: "composition",
      emotions: ["unease"],
      summary: "バランスを破って生まれる動き",
      tags: ["#ざわざわ", "#ハッとする", "#落ち着かない"],
      image: "asymmetry",
      meaning: "左右や上下のバランスをあえて崩す配置。安定を破ることで、画面に動的な揺らぎや予期せぬ緊張感を呼び起こす手法。",
      episodes: [
        {
          vol: "vol.27",
          title: "ゆがんだ部屋。あべこべで変な形の部屋なのに、なぜか目が離せなくなるのはなぜ？",
          url: "#",
          artists: ["フィンセント・ファン・ゴッホ", "ポール・セザンヌ", "パブロ・ピカソ"]
        }
      ]
    },
    {
      key: "framing", name: "枠取り", icon: "crop", cat: "composition",
      emotions: ["intellectual", "immersed"],
      summary: "陰からのぞき見させる没入感",
      tags: ["#引き込まれる", "#のぞき見", "#なるほど！"],
      meaning: "柱や窓枠などで主役を囲み込む構図。まるで陰からのぞき見をしているような没入感を与えつつ、視線の焦点を限定させる。"
    },
    {
      key: "crowd", name: "群衆", icon: "users", cat: "composition",
      emotions: ["excite", "unease"],
      summary: "画面をごった返させる圧倒的熱量",
      tags: ["#そわそわする", "#テンションが上がる", "#圧倒される"],
      image: "crowd",
      meaning: "多くの人物を画面いっぱいにひしめき合わせる配置。視線を迷わせ、群衆が持つ圧倒的な熱気や混乱を表現する。",
      episodes: [
        {
          vol: "vol.7",
          title: "大勢の人が集まる絵。なぜひとつの「巨大なモンスター」に見えるの？",
          url: "#",
          artists: ["クロード・モネ", "常盤光長", "フランシスコ・デ・ゴヤ"]
        }
      ]
    },

    // --- 5. からだ (mirror) ---
    {
      key: "hands", name: "指先", icon: "hand", cat: "mirror",
      emotions: ["intellectual", "immersed"],
      summary: "顔よりも雄弁に本音をつぶやく",
      tags: ["#なるほど！", "#ハッとする", "#引き込まれる"],
      image: "hands",
      meaning: "指先のわずかな形や角度は、表情以上にその人の本音や祈りを雄弁に語る。言葉を持たない手から、秘められた感情がまっすぐに伝わってくる。",
      episodes: [
        {
          vol: "vol.12",
          title: "しゃべる指先。言葉を使わない「手のポーズ」が、なぜ私たちの悲しみを癒やしてくれるの？",
          url: "#",
          artists: ["ミケランジェロ・ブオナローティ", "レンブラント・ファン・レイン", "フィンセント・ファン・ゴッホ"]
        }
      ]
    },
    {
      key: "stretch", name: "伸び", icon: "person-rays", cat: "mirror",
      emotions: ["relaxed"],
      summary: "身体を大きく伸ばす解放の快感",
      tags: ["#スカッとする", "#軽やか", "#開放感"],
      image: "stretch",
      meaning: "大きく体を伸ばしたり反らせたりしたポーズは、見ているこちらの身体の強張りまで解き放ち、深い呼吸を誘うような心地よさを生む。"
    },
    {
      key: "languid", name: "脱力", icon: "bed", cat: "mirror",
      emotions: ["relaxed"],
      summary: "緊張が解けてダラリとした重さ",
      image: "languid",
      tags: ["#まったり", "#ホッとする", "#スカッとする"],
      meaning: "だらりと力を抜いたポーズや、重力に身を任せた身体。全身の緊張がほぐれきった無防備な姿が、こちらにまで深いリラックス感を伝染させる。"
    },
    {
      key: "embrace", name: "抱擁", icon: "hands-holding-child", cat: "mirror",
      emotions: ["immersed"],
      summary: "強い愛と逃げられない束縛のポーズ",
      tags: ["#うっとり", "#包まれる", "#引き込まれる"],
      meaning: "人を強く抱きしめるポーズは、あふれる愛情の深さと人肌の温もりをダイレクトに伝える。こちらまで優しく包み込まれるような安心感を生む。",
      episodes: [
        {
          vol: "vol.10",
          title: "お母さんのギューッ。これは優しい愛？それとも「絶対に逃がさない」という合図？",
          url: "#",
          artists: ["ラファエロ・サンティ", "メアリー・カサット", "グスタフ・クリムト"]
        }
      ]
    },
    {
      key: "gaze", name: "視線", icon: "eye", cat: "mirror",
      emotions: ["unease", "intellectual"],
      summary: "思わず目線をたどってしまう誘惑",
      tags: ["#ざわざわ", "#ハッとする", "#落ち着かない"],
      meaning: "描かれた人々が向ける目線につられて、無意識にその先を追ってしまう。あるいは、画面の中からじっと見つめ返されることで、目を逸らせない緊張感が生まれる。"
    },
    {
      key: "facingaway", name: "背中", icon: "user-slash", cat: "mirror",
      emotions: ["immersed", "unease"],
      summary: "絵の世界へ引き込む後ろ姿",
      tags: ["#引き込まれる", "#うっとり", "#しんみり"],
      meaning: "鑑賞者に背を向けた人物は、私たちの身代わり。同じ景色を肩越しに見つめることで、一気に絵の世界へとこちらの意識が引き込まれていく。"
    },
    {
      key: "pain", name: "痛み", icon: "heart-crack", cat: "mirror",
      emotions: ["unease"],
      summary: "わが身にうつる強烈な錯覚",
      tags: ["#ヒヤッとする", "#ざわざわ", "#ゾクゾク"],
      meaning: "傷ついた身体や苦痛に歪む顔を見ると、こちらの胸の奥までヒヤリと痛む。他人の痛みをまるで自分のことのように錯覚してしまう、強烈な身体的共感。",
      episodes: [
        {
          vol: "vol.8",
          title: "リアルすぎる痛み。傷だらけの体をみると、なぜ自分まで痛くなってくるの？",
          url: "#",
          artists: ["ルーベンス", "ポール・ゴーギャン", "マティアス・グリューネヴァルト"]
        }
      ]
    },
    {
      key: "silence", name: "沈黙", icon: "comment-slash", cat: "mirror",
      emotions: ["immersed", "unease"],
      summary: "会話のない部屋に漂う重い空気",
      tags: ["#モヤモヤ", "#ヒヤッとする", "#落ち着かない"],
      meaning: "同じ空間にいるのに視線が噛み合わない人々。言葉のない冷たい空気や、身体の距離感が物語る重たい関係性が、見る者を静かに居心地悪くさせる。",
      episodes: [
        {
          vol: "vol.4",
          title: "気まずい空気の描き方。みんなと一緒にいるのに「ひとりぼっち」に感じるのはなぜ？",
          url: "#",
          artists: ["ファン・ゴッホ", "エドガー・ドガ", "ピエール・ボナール"]
        }
      ]
    },

    // --- 6. ギャップ (gap) ---
    {
      key: "deform", name: "歪み", icon: "wand-magic-sparkles", cat: "gap",
      emotions: ["unease", "intellectual"],
      summary: "現実からずらして脳を惑わす形",
      tags: ["#ざわざわ", "#モヤモヤ", "#なるほど！"],
      image: "deform",
      meaning: "人体や空間の比率を現実からあえて歪める表現。見慣れた形との落差が心地よい違和感を生み、表現の意図を考察させられる。",
      episodes: [
        {
          vol: "vol.25",
          title: "のびーる体。わざと骨や筋肉の形を無視して描いた体が、なぜ美しく見えるの？",
          url: "#",
          artists: ["ジャン＝オーギュスト＝ドミニク・アングル", "アメデオ・モディリアーニ", "ティツィアーノ・ヴェチェッリオ"]
        }
      ]
    },
    {
      key: "grid", name: "反復", icon: "border-all", cat: "gap",
      emotions: ["unease", "intellectual"],
      summary: "果てしない連続が誘う無限への道",
      tags: ["#ざわざわ", "#落ち着かない", "#クラクラする"],
      image: "grid",
      meaning: "同じ形やパターンが果てしなく繰り返される仕掛け。境界線がふと曖昧になり、まるで広大な宇宙へと無限に吸い込まれていくような没入感を生み出す。",
      episodes: [
        {
          vol: "vol.31",
          title: "同じマークのくり返し。同じものがずらりと並ぶと、なぜ頭がクラクラしてくるの？",
          url: "#",
          artists: ["アンディ・ウォーホル", "草間彌生", "ブリジット・ライリー"]
        }
      ]
    },
    {
      key: "stillmotion", name: "静と動", icon: "bolt", cat: "gap",
      emotions: ["awe", "intellectual"],
      summary: "止まった絵にひそむ激しい予感",
      tags: ["#息を呑む", "#ゾクゾク", "#ハッとする"],
      image: "stillmotion",
      meaning: "止まった画面の中で、なびく衣服や滴る水滴が次の瞬間の動きを予感させる。静けさと激しさの対比が鮮烈な印象を残す。"
    },
    {
      key: "float", name: "浮遊感", icon: "feather", cat: "gap",
      emotions: ["relaxed"],
      summary: "重力を忘れさせるふわふわ感",
      tags: ["#開放感", "#軽やか", "#スカッとする"],
      image: "float",
      meaning: "重い塗料で描かれているのに、空中に浮いているように見える錯覚。現実の重力ルールを忘れさせ、身体を軽く解放する。",
      episodes: [
        {
          vol: "vol.11",
          title: "ふわふわ浮く体。重力を無視して空を飛ぶ絵に、なぜ心がスッキリするの？",
          url: "#",
          artists: ["ジャン・オノレ・フラゴナール", "ウィリアム・ターナー", "マルク・シャガール"]
        }
      ]
    },
    {
      key: "ruins", name: "廃墟", icon: "monument", cat: "gap",
      emotions: ["awe", "unease"],
      summary: "崩れた形が教えてくれる滅びの美",
      tags: ["#息を呑む", "#引き込まれる", "#しんみり"],
      image: "ruins",
      meaning: "栄えた建物が崩れ去った姿は、寂しさと壮大さという真逆の感情を起こさせる。時間の儚さがあるからこそ美しく惹きつけられる。",
      episodes: [
        {
          vol: "vol.23",
          title: "こわれていく美しさ。壊れかけた古い建物を見ると、なぜドキドキして美しく感じるの？",
          url: "#",
          artists: ["カスパー・ダーヴィト・フリードリヒ", "ユベール・ロベール", "パウル・クレー"]
        }
      ]
    },
    {
      key: "lifeanddeath", name: "生命感", icon: "heart-pulse", cat: "gap",
      emotions: ["awe", "excite"],
      summary: "あふれ出す生々しい命の気配",
      tags: ["#ドキドキ", "#血が騒ぐ", "#圧倒される"],
      image: "lifeanddeath",
      meaning: "ただの絵の具やキャンバスのはずなのに、まるで今ここで呼吸をしているかのように生々しく脈打つ。物質の枠を超え、命の気配がせり出してくる躍動感。",
      episodes: [
        {
          vol: "vol.16",
          title: "一輪の花。ただの植物なのに、なぜまるで「生きている人間」みたいに見えるの？",
          url: "#",
          artists: ["フィンセント・ファン・ゴッホ", "セヴェリン・ローゼン", "オディロン・ルドン"]
        }
      ]
    },
    {
      key: "beautyfear", name: "美と恐怖", icon: "skull", cat: "gap",
      emotions: ["awe", "unease"],
      summary: "完璧な美しさの裏に潜むおそろしさ",
      tags: ["#ゾクゾク", "#ヒヤッとする", "#ざわざわ"],
      meaning: "美しく完璧な絵の中に、おそろしい事件や悲劇が潜む描写。美と恐怖の激しい落差が脳に強い刺激と不可解な緊張を与える。",
      episodes: [
        {
          vol: "vol.20",
          title: "きれいだけど怖い。美しい人と「おそろしい事件」がセットになると、なぜ頭がフリーズしちゃうの？",
          url: "#",
          artists: ["アルテミシア・ジェンティレスキ", "ジャック＝ルイ・ダヴィッド", "ジョン・エヴァレット・ミレイ"]
        }
      ]
    }
  ]
};