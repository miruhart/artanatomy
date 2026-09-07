// Stage1の中身：視覚のしかけカテゴリ・全サブ要素・感情マッピング・CSV記載の漫画30話限定紐付け版（完全双方向同期版）
const STAGE1_DATA = {
  categories: [
    {
      key: "color",
      name: "色",
      icon: "palette",
      meaning: "真っ赤な部屋で興奮したり、青い空を見てほっとしたり。色には言葉なしで直接心に触れるパワーがあります。画家はその効果を知り尽くして、あなたの心を自由に揺さぶっています。"
    },
    {
      key: "light",
      name: "光と影",
      icon: "lightbulb",
      meaning: "暗闇にはドキドキし、明るい場所にはホッとする。人は本能的に光を探します。画家はあえて影を濃くしたり、一筋の光を強めたりして、絵の中に劇的なドラマを生み出します。"
    },
    {
      key: "texture",
      name: "筆致",
      icon: "paintbrush",
      meaning: "絵の具のボコボコや勢いある筆の跡を見ていると、触っていないのに手触りまで伝わってくる気がしませんか？キャンバスに残された痕跡から、画家の息づかいが届きます。"
    },
    {
      key: "composition",
      name: "構図",
      icon: "compass-drafting",
      meaning: "なぜか真っ先に目が行ってしまう場所。それは偶然ではなく、画家の仕掛けです。物の並べ方や方向を計算し、あなたの視線を思い通りに操る秘密のマップなのです。"
    },
    {
      key: "mirror",
      name: "からだ",
      icon: "hand-holding-heart",
      meaning: "絵の中の人が痛そうにしていると、自分まで身体がキュッとなる。脳は人の姿を見ると、無意識に自分の体で再現します。ポーズを通して、絵の感情があなたへ移るのです。"
    },
    {
      key: "gap",
      name: "矛盾",
      icon: "masks-theater",
      meaning: "「きれいなのにどこか怖い」「止まっているのに動いている」。相反するものが一緒に存在すると、脳はバグを起こして目が離せなくなります。このギャップこそが絵の魅力です。"
    }
  ],

  emotions: [
    {
      key: "immersed", name: "没入・安心", sub: "包み込まれる世界", icon: "water", bg: "var(--green)", short: "うっとり",
      words: ["うっとり", "まったり", "ホッとする", "引き込まれる", "静まる", "包まれる"],
      mechanism: "なめらかなグラデーションや包み込むような光の中に立つと、呼吸が深くなり、自分が絵の中に吸い込まれて心地よく溶けていくような感覚に包まれます。",
      subs: ["blue", "white", "gradation", "softlight", "moonlight", "sfumato", "horizon", "depth", "framing", "hands", "embrace", "facingaway", "silence"]
    },
    {
      key: "awe", name: "畏敬・圧倒", sub: "とてつもない美しさ", icon: "mountain", bg: "var(--blue)", short: "ゾクゾク",
      words: ["ぞわぞわ", "ゾクゾク", "息を呑む", "鳥肌が立つ", "圧倒される", "めまいがする"],
      mechanism: "人間の力をはるかに超えた巨大な存在や、息をのむような緻密さに直面したとき。あまりのすごさに怖さと感動が同時に押し寄せ、鳥肌が立つような衝撃を受けます。",
      subs: ["black", "gold", "darkness", "sacredlight", "backlight", "chiaroscuro", "impasto", "hyperdetail", "depth", "center", "stillmotion", "ruins", "lifeanddeath", "beautyfear"]
    },
    {
      key: "excite", name: "興奮・活力", sub: "エネルギー", icon: "fire", bg: "var(--mustard)", short: "ドキドキ",
      words: ["ドキドキ", "ワクワク", "ハッとする", "血が騒ぐ", "テンションが上がる", "そわそわする"],
      mechanism: "鮮烈な赤や、絵の具が跳ね飛ぶような荒々しい筆遣いを目にすると、心拍数がぐっと上がり、理由もなく身体の奥からエネルギーが湧き上がってきます。",
      subs: ["red", "yellow", "orange", "warmcool", "chiaroscuro", "brushstroke", "impasto", "splatter", "diagonal", "crowd", "lifeanddeath"]
    },
    {
      key: "unease", name: "違和感・不安", sub: "不気味", icon: "eye", bg: "var(--pink)", short: "ざわざわ",
      words: ["ざわざわ", "ヒヤッとする", "なにかおかしい", "不気味", "落ち着かない", "モヤモヤ"],
      mechanism: "「なんか変だぞ」「暗くて奥が見えない」と感じた瞬間、脳は無意識に危険を察知して警戒モードに入ります。この不気味なざわめきが、見る者を強く惹きつけます。",
      subs: ["green", "black", "purple", "moonlight", "darkness", "backlight", "asymmetry", "crowd", "gaze", "facingaway", "pain", "silence", "deform", "grid", "ruins", "beautyfear"]
    },
    {
      key: "relaxed", name: "解放・爽快", sub: "解き放たれる", icon: "wind", bg: "var(--green)", short: "すっきり",
      words: ["すっきり", "開放感", "スカッとする", "風を感じる", "軽やか", "広々"],
      mechanism: "果てしなく広がる水平線やまっすぐ伸びる直線を見つめていると、身体の強張りがすーっと抜け、どこまでも開放的な気分で深い息が吐けるようになります。",
      subs: ["blue", "green", "white", "silver", "gradation", "softlight", "horizon", "onepoint", "stretch", "languid", "float"]
    },
    {
      key: "intellectual", name: "知的快感", sub: "謎解きの面白さ", icon: "puzzle-piece", bg: "var(--mustard)", short: "なるほど！",
      words: ["なるほど！", "アハ体験", "伏線回収", "ピタッとはまる", "ゾクッとする発見", "スッキリ"],
      mechanism: "一見バラバラに見える色や形。でも「あ、ここに視線を誘導する仕掛けがあるんだ！」と気づいた瞬間、全ての謎が解けて脳に快感の閃き（アハ体験）が駆け巡ります。",
      subs: ["silver", "complementary", "flat", "sfumato", "hyperdetail", "center", "triangle", "goldenratio", "onepoint", "framing", "hands", "gaze", "deform", "grid", "stillmotion"]
    }
  ],

  subs: [
    // --- 1. 色 (color) ---
    {
      key: "red", name: "赤", icon: "droplet", cat: "color",
      emotions: ["excite"],
      swatch: "#e5484d",
      summary: "見るだけで脈拍が上がる命と激情の色",
      image: "red",
      tags: ["#ドキドキ", "#血が騒ぐ", "#テンションが上がる", "#危険"],
      meaning: "赤は血や炎を連想させ、見る人の脈拍を自然と跳ね上がらせる本能の色です。画家は画面の中にパッと赤を置くことで、一瞬で視線を奪い、主人公の激しい情熱や命の燃え上がりをストレートに印象づけています。",
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
      summary: "心を鎮め、果てしない奥行きへ誘う色",
      image: "blue",
      tags: ["#うっとり", "#引き込まれる", "#心が鎮まる", "#広々"],
      meaning: "青は空や海、果てしない宇宙を思わせ、興奮した心をスッと鎮めてくれる色です。遠くの景色ほど青く見える性質があるため、絵の中に深い静けさや孤独感、そしてどこまでも吸い込まれるような奥行きを生み出します。",
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
      summary: "脳へダイレクトに届く光と希望の信号",
      tags: ["#ワクワク", "#ハッとする", "#テンションが上がる"],
      image: "yellow",
      meaning: "黄色は太陽の光や実りを象徴し、すべての色の中で最も素早く脳に届く強い色です。暗い画面の中に一箇所あるだけでも、そこから眩しい希望や温かい歓喜が溢れ出すように見え、強烈なインパクトを残します。"
    },
    {
      key: "green", name: "緑", icon: "leaf", cat: "color",
      emotions: ["relaxed", "unease"],
      swatch: "#4caf6a",
      summary: "安心から一転、あやしい毒気へ化ける色",
      image: "green",
      tags: ["#ざわざわ", "#毒気", "#ホッとする", "#ヒヤッとする"],
      meaning: "緑は植物を思わせる安心の色ですが、光や影の当たり方ひとつで不気味な毒気へと一変します。「見慣れたはずの緑がどこか怪しい」と感じると、脳は危険を察知して警戒し、目が離せない独特の不穏さに包まれます。",
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
      summary: "すべての光を呑み込み、他を引き立てる闇",
      image: "black",
      tags: ["#圧倒される", "#ヒヤッとする", "#ゾクゾク"],
      meaning: "すべての光を吸収する黒は、何が潜んでいるか分からない未知の恐怖や絶望を表します。一方で、隣にある鮮やかな色を際立たせる効果もあり、画面全体の輪郭をくっきりと引き締めるクールな役割も果たします。"
    },
    {
      key: "white", name: "白", icon: "snowflake", cat: "color",
      emotions: ["immersed", "relaxed"],
      swatch: "#ffffff",
      summary: "静けさと神聖さをもたらす無限の空白",
      image: "white",
      tags: ["#ホッとする", "#心が洗われる", "#すっきり", "#静まる"],
      meaning: "まったく汚れのない白は、神聖さや純粋さ、さらには無限の広がりを感じさせます。何も描かれていない空白が静まり返った緊張感を生むと同時に、周りにある色彩の美しさをまっすぐに引き立てるベースになります。",
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
      summary: "夕焼けの温もりと人肌の親しみやすさ",
      image: "orange",
      tags: ["#ワクワク", "#ほっこり", "#テンションが上がる"],
      meaning: "赤のエネルギッシュさと黄色の明るさを持ち合わせたオレンジは、まるで夕焼けや焚き火のように心をポカポカ温めます。親しみやすい人肌の温もりや、みんなで賑わう陽気な活気を画面全体に広げてくれる色です。"
    },
    {
      key: "purple", name: "紫", icon: "eye", cat: "color",
      emotions: ["unease"],
      swatch: "#8b5fbf",
      image: "purple",
      summary: "情熱と静寂が混ざり合うミステリアスな色",
      tags: ["#ざわざわ", "#モヤモヤ", "#ミステリアス"],
      meaning: "興奮を誘う赤と、静けさをもたらす青。全く逆の性質を持つふたつの色が交ざり合う紫は、とてもミステリアスです。見る人の心の中に「熱さと冷たさが混ざり合う」ような、不思議で妖しいモヤモヤ感を作り出します。"
    },
    {
      key: "gold", name: "金", icon: "sparkles", cat: "color",
      emotions: ["awe"],
      swatch: "linear-gradient(135deg,#f6e27a,#c9a227)",
      summary: "影のない輝きで現実感を消し去る光",
      image: "gold",
      tags: ["#息を呑む", "#圧倒される", "#吸い込まれそう"],
      meaning: "キラリと光を弾く金の背景は、奥行きや影といった現実のルールを消し去ります。どこまでも平らで眩しい輝きを見つめていると、まるで普段の現実世界から切り離され、神様が住む特別な異次元へ吸い込まれそうになります。",
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
      summary: "無駄を削ぎ落とした冷たく洗練された知性",
      image: "silver",
      tags: ["#凛とする", "#すっきり", "#静まる"],
      meaning: "余計な自己主張をせず、冷たくシャープに光る金属的な色です。人間らしい温もりや感情を一度リセットし、静まり返った空気の中で知性をキリッと研ぎ澄ますような、凛とした緊張感を画面に与えてくれます。"
    },
    {
      key: "warmcool", name: "暖色・寒色", icon: "temperature-half", cat: "color",
      emotions: ["excite"],
      swatch: "linear-gradient(90deg, #e5484d, #3b6fd4)",
      image: "warmcool",
      summary: "画面の温度差でダイレクトに感情をゆさぶる",
      tags: ["#ドキドキ", "#ハッとする", "#テンションが上がる"],
      meaning: "赤や黄色の暖かさと、青や水色のひんやり感。人間は色を見るだけで「肌の温度」を感覚的に感じ取ります。絵の中の温度差を利用することで、見る人の体感温度や心持ちを直接ゆさぶるテクニックです。"
    },
    {
      key: "complementary", name: "補色", icon: "circle-half-stroke", cat: "color",
      emotions: ["intellectual"],
      swatch: "linear-gradient(90deg, #e5484d, #4caf6a)",
      summary: "正反対の色を並べてお互いを極限まで輝かせる",
      image: "complementary",
      tags: ["#ハッとする", "#ピタッとはまる", "#なるほど！"],
      meaning: "色の図（色相環）で真反対に位置する赤と緑、青とオレンジなどを隣り合わせる仕掛けです。お互いの色が存在感を打ち消し合うどころか爆発的に高め合い、目がチカチカするほど鮮やかなインパクトを生み出します。",
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
      summary: "刻々と変わる空の表情で物語の運命を告げる",
      image: "gradation",
      tags: ["#うっとり", "#引き込まれる", "#しんみり"],
      meaning: "夕暮れから夜へ移り変わる空のように、色がなめらかに変化するグラデーション。画面全体のムードを一瞬で決定づけるだけでなく、「これから何かが起きる」という物語の予感や運命の切なさを静かに物語ります。",
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
      summary: "包み込むような光がもたらす穏やかな時間",
      tags: ["#うっとり", "#ホッとする", "#まったり", "#包まれる"],
      image: "softlight",
      meaning: "薄曇りの日の光や、カーテン越しに差し込む柔らかな日差し。激しい影を作らないおだやかな光線が、画面全体を包み込みます。日常のふとした瞬間を、まるで宝物のように優しく温かい時間に演出する魔法です。",
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
      summary: "青白い光が照らし出す夜の静寂と秘密",
      image: "moonlight",
      tags: ["#しんみり", "#ざわざわ", "#静まる"],
      meaning: "暗闇の中に青白く浮かび上がる月明かりやランプの灯り。静けさで心を落ち着かせる一方で、光が届かない深い影が「何か潜んでいるのでは？」という秘密めいた不安や、幻想的なドラマを醸し出します。"
    },
    {
      key: "darkness", name: "暗闇", icon: "moon", cat: "light",
      emotions: ["awe", "unease"],
      summary: "見えない部分が脳の想像力を刺激する深い闇",
      image: "darkness",
      tags: ["#ヒヤッとする", "#ざわざわ", "#息を呑む"],
      meaning: "画面の大部分をあえて漆黒の闇で覆い隠す演出です。照らされたわずかな場所に一瞬で目が惹きつけられると同時に、暗くて見えない部分を「どうなっているんだろう」と自分の脳が勝手に想像してドキドキします。",
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
      summary: "暗雲を破って降り注ぐ神聖で特別な一筋の光",
      image: "sacredlight",
      tags: ["#息を呑む", "#ゾクゾク", "#鳥肌が立つ"],
      meaning: "暗い空や天井のすきまから、まっすぐ一筋だけ伸びる眩しい光。人間の力を超えた神様や奇跡の訪れを感じさせます。この光を浴びている人物は、ひと目で「選ばれた特別で神聖な存在だ」と直感できるようになります。",
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
      summary: "表情を隠し、シルエットで感情を物語る光",
      tags: ["#ハッとする", "#ミステリアス", "#ざわざわ"],
      image: "backlight",
      meaning: "被写体の後ろから眩しい光を当てることで、人物の顔をあえて影にする手法です。細かい表情が見えないからこそ、クッキリ浮かび上がるシルエットや佇まいから「何を思っているんだろう」と深く想像させられます。"
    },
    {
      key: "chiaroscuro", name: "劇的明暗", icon: "masks-theater", cat: "light",
      emotions: ["awe", "excite"],
      summary: "暗闇と光の強烈なコントラストが生むドラマ",
      tags: ["#息を呑む", "#ドキドキ", "#圧倒される"],
      image: "chiaroscuro",
      meaning: "まるで舞台のスポットライトのように、光が当たる場所と深い影の差を激しくつける技法です。静止しているはずの絵が一瞬で映画のクライマックスシーンのような緊張感に包まれ、迫りくる立体感を生み出します。",
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
      summary: "凹凸を削ぎ落とした、すっきり美しい色の面",
      image: "flat",
      tags: ["#スッキリ", "#ピタッとはまる", "#凛とする"],
      meaning: "絵の具の段差や塗った跡（筆跡）を限界まで消し去り、平らに塗りつぶす技法です。影のグラデーションを使わないことで、輪郭の美しさやクリアな色の組み合わせそのものがスッキリと際立って見えてきます。"
    },
    {
      key: "brushstroke", name: "筆跡", icon: "paintbrush", cat: "texture",
      emotions: ["excite"],
      summary: "画家の腕の動きとパッションがそのまま残る跡",
      image: "brushstroke",
      tags: ["#血が騒ぐ", "#ワクワク", "#テンションが上がる"],
      meaning: "筆をたたきつけたり素早く走らせたりした勢いを、消さずにそのままキャンバスに残す手法です。画家の手の動きや息づかい、描いた瞬間の激しい情熱がダイレクトに伝わり、見ているこちらの心まで熱くなります。",
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
      summary: "絵の具の山が作る本物の立体感と存在感",
      tags: ["#ゾクゾク", "#圧倒される", "#生々しい"],
      image: "impasto",
      meaning: "絵の具をチューブから出したままのように立体的に盛り盛り二塗る技法です。絵の中に「本物の凹凸」ができるため、光が当たると本物の影が生まれ、触れられそうなほどの生々しい存在感と迫力が手に入ります。",
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
      summary: "境目を煙のように溶かし、見る人の脳を惑わす",
      tags: ["#うっとり", "#なるほど！", "#モヤモヤ"],
      image: "sfumato",
      meaning: "輪郭線をはっきり描かず、煙のようにふんわり境目を溶かす技法です。あえて形を曖昧にすることで、見ている人の脳が「どんな顔だろう？」と想像して穴埋めしようとするため、じっと引き込まれて離せなくなります。"
    },
    {
      key: "hyperdetail", name: "点と集積", icon: "eye", cat: "texture",
      emotions: ["awe", "intellectual"],
      summary: "小さな点の集合が、離れると輝く絵になる魔法",
      image: "hyperdetail",
      tags: ["#息を呑む", "#アハ体験", "#なるほど！"],
      meaning: "細かい点や粒々をぎっしり敷き詰めて描く表現です。近くで見るとただの細かい点の集まりですが、少し離れると脳の中で色彩が自動的に交ざり合い、パッと眩しい光や圧倒的なリアルさとして浮き上がって見えます。",
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
      summary: "飛び散る絵の具に刻まれたダイナミックな身体運動",
      image: "splatter",
      tags: ["#ドキドキ", "#血が騒ぐ", "#ハッとする"],
      meaning: "画家がキャンバスに向かって絵の具を弾いたり叩きつけたりする、ダイナミックな手法です。画家の全身のダイナミックな動きや飛び散るエネルギーがそのまま画面に定着し、見る人の身体をゾクゾク刺激します。",
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
      summary: "まっすぐな横線がもたらす揺るぎない安定と安心",
      tags: ["#ホッとする", "#すっきり", "#広々", "#包まれる"],
      image: "horizon",
      meaning: "画面を横切るまっすぐな線（水平線）は、地球の重力を感じさせる最も安定したラインです。この線が一本通っているだけで、私たちの心はすーっと落ち着き、目の前にどこまでも続く開放的な広がりを感じ取れます。",
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
      summary: "ど真ん中にどんと置いて視線を釘付けにする",
      tags: ["#ハッとする", "#圧倒される", "#なるほど！"],
      image: "center",
      meaning: "見せたい主役を画面のど真ん中に大きくドカンと置くシンプルな配置です。脇目に逸れるすきを与えず、見る人の視線を強制的にロックします。逃げ場のないインパクトと、威厳ある圧倒的な存在感をストレートに伝えます。",
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
      image: "triangle",
      summary: "安定したピラミッド型が作る揺るぎない秩序",
      tags: ["#ホッとする", "#ピタッとはまる", "#すっきり"],
      meaning: "底辺がどっしり広く、上が尖ったピラミッドのような三角形の形。人間はこれを見ると直感的に「絶対に倒れない」と安心します。画面の中に三角形を作ることで、静かで崩れない完璧な秩序と安定感を生むのです。"
    },
    {
      key: "diagonal", name: "斜線", icon: "slash", cat: "composition",
      emotions: ["excite"],
      summary: "ななめのラインが画面を切り裂くスピード感",
      tags: ["#ドキドキ", "#スカッとする", "#ハッとする"],
      image: "diagonal",
      meaning: "画面の中に斜めの線をすっと滑り込ませる技法です。まっすぐな縦横の線と違って「倒れそうなアンバランスさ」を感じさせるため、静止した絵の中にハッとするようなスピード感や、一瞬の激しい動きが生まれます。"
    },
    {
      key: "goldenratio", name: "黄金比", icon: "compass-drafting", cat: "composition",
      emotions: ["intellectual"],
      summary: "脳が自然と『きれい！』と感じる究極の黄金バランス",
      tags: ["#ピタッとはまる", "#なるほど！", "#すっきり"],
      image: "goldenratio",
      meaning: "パルテノン神殿や貝殻の渦巻きにも隠されている「人間が最も美しく感じる特別の比率（約1:1.618）」です。この比率で配置された画面を見ると、頭で理由を考えなくても直感的に「整っていて気持ちいい！」と感じます。"
    },
    {
      key: "onepoint", name: "一点透視", icon: "vector-square", cat: "composition",
      emotions: ["relaxed", "intellectual"],
      summary: "遠くのひとつの点へ向かって吸い込まれる空間",
      image: "onepoint",
      tags: ["#引き込まれる", "#スカッとする", "#なるほど！"],
      meaning: "画面の中のすべての線が、遠くの「ひとつの点」に向かってまっすぐ収束していく描き方です。線に導かれるように視線が奥へ奥へとスコーーーンと引き込まれ、まるで自分がその空間に立っているような臨場感を味わえます。",
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
      summary: "平面のキャンバスを突き抜けて広がる果てしない大空間",
      image: "depth",
      tags: ["#引き込まれる", "#広々", "#圧倒される"],
      meaning: "平らな布（キャンバス）の上に、色の濃淡や手前と奥の物の大きさの差を使って「果てしない空間」を幻視させる技法です。目の前にある額縁を突き抜けて、どこまでも歩いていけそうな広大な世界を作り出します。",
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
      summary: "あえてバランスを崩して心を引きつける揺らぎ",
      tags: ["#ざわざわ", "#ハッとする", "#落ち着かない"],
      image: "asymmetry",
      meaning: "きれいに左右対称にするのではなく、あえて物の位置や大きさを崩してアンバランスにする手法です。完璧な安定を破ることで脳に「おや？」と思わせ、画面にフレッシュな動きや目が離せないドキドキ感を生み出します。",
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
      summary: "手前の枠越しに見せることで高まる「のぞき見」感",
      image: "framing",
      tags: ["#引き込まれる", "#のぞき見", "#なるほど！"],
      meaning: "手前に柱や窓枠、樹木などを置き、その奥にある主役を「囲い込む」ように見せる技法です。まるで物陰からこっそり秘密のシーンをのぞき見しているような感覚になり、一気に作品の世界へ意識が引き込まれます。"
    },
    {
      key: "crowd", name: "群衆", icon: "users", cat: "composition",
      emotions: ["excite", "unease"],
      summary: "画面いっぱいにひしめく人々が放つ圧倒的な熱気",
      tags: ["#そわそわする", "#テンションが上がる", "#圧倒される"],
      image: "crowd",
      meaning: "画面の中にたくさんの人々をぎゅうぎゅうに描き込む手法です。どこを見ればいいか目移りさせることで、お祭りや事件の現場に巻き込まれたかのような熱気、混乱、そして圧倒的なエネルギーの渦を感じさせます。",
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
      summary: "表情以上に心の深い本音や悲しみを語る手の表情",
      tags: ["#なるほど！", "#ハッとする", "#引き込まれる"],
      image: "hands",
      meaning: "ギュッと握りしめられた拳や、力なく垂れ下がった指先。人の手や指のポーズは、顔のつくられた表情以上にその人の本心や祈りを物語ります。言葉のない手のしぐさを見ることで、胸の奥の感情がダイレクトに届きます。",
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
      summary: "からだを大きく反らすポーズがつくる解放の心地よさ",
      tags: ["#スカッとする", "#軽やか", "#開放感"],
      image: "stretch",
      meaning: "体を大きく反らせたり、両手を空へ向かって伸ばしたりするポーズ。絵の中の人の伸びやかな姿を見つめていると、自分の体まで一緒にキュッと伸びたような感覚になり、胸が広がってスーッと深い呼吸ができます。"
    },
    {
      key: "languid", name: "脱力", icon: "bed", cat: "mirror",
      emotions: ["relaxed"],
      summary: "全身の力をぬいた無防備さが伝えるリラックス感",
      image: "languid",
      tags: ["#まったり", "#ホッとする", "#スカッとする"],
      meaning: "重力に身をまかせてダラリと力を抜いたポーズや、まどろむ姿。全身の緊張が解けきった無防備な身体を見ていると、見ているこちらの肩の力までふっと抜け、まったりとしたリラックス感が心地よく伝染してきます。"
    },
    {
      key: "embrace", name: "抱擁", icon: "hands-holding-child", cat: "mirror",
      emotions: ["immersed"],
      summary: "ぎゅっと抱きしめる姿から溢れる強い愛とぬくもり",
      image: "embrace",
      tags: ["#うっとり", "#包まれる", "#引き込まれる"],
      meaning: "誰かをぎゅっと強く抱きしめるポーズは、あふれる愛や人肌の温もりをストレートに伝えてくれます。見ているだけで自分まで優しく包み込まれたような安心感に浸れる一方で、「絶対に離さない」という強い絆も物語ります。",
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
      summary: "だれかの視線を無意識に追いかけてしまう人間の心理",
      image: "gaze",
      tags: ["#ざわざわ", "#ハッとする", "#落ち着かない"],
      meaning: "人は他人がどこを見ているか無意識に気になって追いかけてしまう習性があります。絵の中の人物の目線をたどることで隠されたストーリーに気づいたり、逆にこちらをじっと見つめ返されることでハッとしたりします。"
    },
    {
      key: "facingaway", name: "背中", icon: "user-slash", cat: "mirror",
      emotions: ["immersed", "unease"],
      summary: "後ろ姿に自分を重ね、絵の世界へ一緒に没入する",
      image: "facingaway",
      tags: ["#引き込まれる", "#うっとり", "#しんみり"],
      meaning: "私達に背中を向けた人物は、絵の中に立つ「自分の身代わり」です。その人の肩越しに同じ景色を見つめることで、外側から眺めているのではなく、自分自身が絵の主人公になってその世界に入り込んだ体験ができます。"
    },
    {
      key: "pain", name: "痛み", icon: "heart-crack", cat: "mirror",
      emotions: ["unease"],
      summary: "人の痛む姿を見るだけで自分の身体まで疼く共感",
      image: "pain",
      tags: ["#ヒヤッとする", "#ざわざわ", "#ゾクゾク"],
      meaning: "傷ついた身体や苦痛に歪む顔を見ると、脳のミラーニューロンが働いて自分の胸までヒヤッと痛む感覚になります。他人の痛みを自分の体験として錯覚してしまうほどの強い共感が、忘れられない強烈な体験を残します。",
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
      summary: "会話のない空間に漂う、重く気まずい空気感",
      image: "silence",
      tags: ["#モヤモヤ", "#ヒヤッとする", "#落ち着かない"],
      meaning: "同じ部屋にいるのに誰とも目が合わない人々。静まり返った場面に漂う「言葉のなさ」や人間同士の微妙な距離感が、二人の関係性を雄弁に物語ります。静寂だからこそ伝わってくる重たい空気に、胸がざわざわします。",
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
      summary: "体の形をわざとゆがめ、現実を超えた美しさを生む",
      tags: ["#ざわざわ", "#モヤモヤ", "#なるほど！"],
      image: "deform",
      meaning: "首や手足を現実の人間ではありえないほど長く伸ばしたり、形をゆがめたりする表現です。リアルな形からずらすことで生まれる違和感が脳を刺激し、「なぜこう描いたんだろう？」と作品の魅力を探らせるフックになります。",
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
      summary: "同じ模様のループが脳をクラクラさせ無限へ誘う",
      tags: ["#ざわざわ", "#落ち着かない", "#クラクラする"],
      image: "grid",
      meaning: "同じマークや模様が、ずらりと果てしなく繰り返される仕掛けです。どこまでも続くパターンを見つめていると、自分のいる場所の境界線がだんだん分からなくなり、無限に広がる宇宙へ吸い込まれるような感覚に陥ります。",
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
      summary: "止まった一瞬の中にひそむ、次の瞬間の激しい動き",
      tags: ["#息を呑む", "#ゾクゾク", "#ハッとする"],
      image: "stillmotion",
      meaning: "完全にかたまった静かな絵の中に、風になびく服や飛び散る水滴を描く手法です。「次の瞬間に大きく動くぞ」というエネルギーを閉じ込めることで、静けさの中に鮮烈な動きの予感が生まれ、目が離せなくなります。"
    },
    {
      key: "float", name: "浮遊感", icon: "feather", cat: "gap",
      emotions: ["relaxed"],
      summary: "重力から解き放たれ、空へ浮かび上がるような快感",
      tags: ["#開放感", "#軽やか", "#スカッとする"],
      image: "float",
      meaning: "本来なら地面に立つはずの人が、空中にふわふわと浮かんでいる描写です。ずっしり重い絵の具で描かれているからこそ、「重力を無視して浮かぶ」ギャップが際立ち、見る人の身体まで軽やかに解放してくれます。",
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
      summary: "崩れゆく建物が伝える、時間の儚さと壮大なドラマ",
      tags: ["#息を呑む", "#引き込まれる", "#しんみり"],
      image: "ruins",
      meaning: "かつて繁栄した建物が草木に覆われ、ボロボロに崩れていく姿。滅びゆく寂しさと自然の壮大さという相反する感情が交ざり合い、「形あるものはいつか消える」という歴史のロマンと儚い美しさに強く惹きつけられます。",
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
      summary: "ただの絵の具なのに、今にも動き出しそうな命の拍動",
      tags: ["#ドキドキ", "#血が騒ぐ", "#圧倒される"],
      image: "lifeanddeath",
      meaning: "単なる絵の具とキャンバスで作られた画面から、まるで今までに呼吸をして血が通っているかのような「生の気配」が迫ってくる仕掛けです。物質であることを超えて、画面の向こうから命の力強さが飛び出してきます。",
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
      summary: "完璧に美しい絵の奥にひそむ、恐ろしい悲劇のゾクゾク感",
      tags: ["#ゾクゾク", "#ヒヤッとする", "#ざわざわ"],
      image: "beautyfear",
      meaning: "うっとりするほど綺麗な人物や風景の中に、実は恐ろしい事件や毒、悲劇が隠されている仕掛けです。「美しいのに恐ろしい」という激しいギャップに脳が混乱し、背筋が寒くなりながらも惹きつけられてしまいます。",
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