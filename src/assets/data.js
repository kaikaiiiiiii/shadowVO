export const modes=["Story","Charactors","Music","Video"]

export const languages=[
    {code:"cn",text:"中文"},
    {code:"en",text:"English"},
    {code:"jp",text:"日本語"}
]

export const voices = [
    { code: "voen", text: "English" },
    { code: "vojp", text: "日本語" }
]

export const levels=[
    {order:1,name:{CN:"大阪城",EN:"Ōsaka Castle",JP:"大阪城"},mission:{CN:"大阪攻城战",EN:"The Siege of Ōsaka",JP:"大阪攻城戦"},cover:"mission_preview_firstcastle.png",isChapter:true,origin:"firstcastle"},
    {order:3,name:{CN:"中山道",EN:"Nakasendō Road",JP:"中山道"},mission:{CN:"中山道之劫",EN:"Trouble on the Nakasendō",JP:"中山道での苦難"},cover:"mission_preview_convoy.png",isChapter:true,origin:"convoy"},
    {order:5,name:{CN:"今井镇",EN:"Imai Town",JP:"今井町"},mission:{CN:"今井镇侠盗",EN:"The Thieves of Imai",JP:"今井の泥棒"},cover:"mission_preview_snowcity.png",isChapter:true,origin:"snowcity"},
    {order:7,name:{CN:"鹤山",EN:"Mount Tsuru",JP:"鶴山"},mission:{CN:"鶴山からの脱出",EN:"Escape from Mount Tsuru",JP:"ぁ"},cover:"mission_preview_monastery1.png",isChapter:true,origin:"monastery1"},
    {order:9,name:{CN:"薮大名的豪宅",EN:"Lord Yabu's Estate",JP:"藪大名の邸宅"},mission:{CN:"刺杀薮大名",EN:"Killing Lord Yabu",JP:"藪大名の殺害"},cover:"mission_preview_mansion.png",isChapter:true,origin:"mansion"},
    {order:11,name:{CN:"飞騨村",EN:"Hida Village",JP:"飛騨村"},mission:{CN:"密探飞騨村",EN:"Spies in Hida Village",JP:"飛騨村での密偵"},cover:"mission_preview_lakevillage.png",isChapter:true,origin:"lakevillage"},
    {order:13,name:{CN:"菅沼村",EN:"Suganuma Village",JP:"菅沼村"},mission:{CN:"菅沼大营救",EN:"Suganuma Rescue",JP:"菅沼での救出"},cover:"mission_preview_ricefields.png",isChapter:true,origin:"ricefields"},
    {order:15,name:{CN:"金泽城",EN:"Kanazawa City",JP:"金沢"},mission:{CN:"金泽攻防战",EN:"Attack on Kanazawa",JP:"カゲサマ襲擊"},cover:"mission_preview_uprising.png",isChapter:true,origin:"uprising"},
    {order:17,name:{CN:"影大人营地",EN:"Kage-sama's Camp",JP:"カゲサマの隐れ家"},mission:{CN:"影大人之死",EN:"The Death of Kage-sama",JP:"カゲサマの死"},cover:"mission_preview_bambooforest.png",isChapter:true,origin:"bambooforest"},
    {order:18,name:{CN:"鹤山（监狱）",EN:"Mount Tsuru (Prison)",JP:"鶴山"},mission:{CN:"鹤山之变",EN:"Betrayal at Mount Tsuru",JP:"鶴山での裏切り"},cover:"mission_preview_monastery2.png",isChapter:true,origin:"monastery2"},
    {order:20,name:{CN:"松山",EN:"Matsuyama City",JP:"松山"},mission:{CN:"生擒真申",EN:"Taking Masaru",JP:"勝の誘拐"},cover:"mission_preview_bathhouse.png",isChapter:true,origin:"bathhouse"},
    {order:22,name:{CN:"妙义岭",EN:"Myōgi Pass",JP:"妙義峠"},mission:{CN:"命运之会面",EN:"A Fateful Meeting",JP:"運命の迎合"},cover:"mission_preview_shoguncamp.png",isChapter:true,origin:"shoguncamp"},
    {order:24,name:{CN:"骏府城",EN:"Sumpu Castle",JP:"駿府城"},mission:{CN:"昇之末路",EN:"The Death of Noboru",JP:"昇の死"},cover:"mission_preview_finalcastle.png",isChapter:true,origin:"finalcastle"},
    {order:2,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"firstcastle_post"},
    {order:4,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"convoy_post"},
    {order:6,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"snowcity_post"},
    {order:8,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"monastery1_post"},
    {order:10,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"mansion_post"},
    {order:12,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"lakevillage_post"},
    {order:14,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"ricefields_post"},
    {order:16,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"uprising_post"},
    {order:19,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"monastery2_post"},
    {order:21,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"bathhouse_post"},
    {order:23,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"shoguncamp_post"},
    {order:25,name:"",mission:{CN:"",EN:"",JP:""},cover:"",isChapter:false,origin:"finalcastle_post"},
]

export const speakers = {
    "NINJA":{en:"Hayato",cn:"隼人",jp:"隼人",x:0,y:0},
    "TRAPPER":{en:"Yuki",cn:"有希",jp:"雪",x:80,y:0},
    "WARRIOR":{en:"Mugen",cn:"无限",jp:"武源",x:160,y:0},
    "GEISHA":{en:"Aiko",cn:"爱子",jp:"愛琥",x:240,y:0},
    "ALCHEMIST":{en:"Takuma",cn:"琢磨",jp:"巧磨",x:320,y:0},
    "TANUKI":{en:"Kuma",cn:"小熊",jp:"クマ",x:400,y:0},
    "ENEMY":{en:"ENEMY",cn:"士兵",jp:"ENEMY",x:0,y:0},
    "STATIC":{en:"STATIC",cn:"士兵",jp:"STATIC",x:0,y:0},
    "CIVILIAN M":{en:"CIVILIAN M",cn:"平民",jp:"町人",x:0,y:0},
    "CIVILIAN F":{en:"CIVILIAN F",cn:"平民",jp:"町人",x:0,y:0},
    "FAKE":{en:"FAKE",cn:"影大人",jp:"カゲサマ",x:0,y:0},
    "OFFICER":{en:"OFFICER",cn:"守卫",jp:"OFFICER",x:0,y:0},
    "BROGUN":{en:"Noboru",cn:"昇",jp:"昇",x:0,y:0},
    "BROGUNSON":{en:"Masaru",cn:"真申",jp:"勝",x:0,y:0},
    "NARRATOR":{en:"NARRATOR",cn:"旁白",jp:"NARRATOR",x:0,y:0},
    "GUARD1":{en:"GUARD1",cn:"士兵",jp:"GUARD1",x:0,y:0},
    "GUARD2":{en:"GUARD2",cn:"士兵",jp:"GUARD2",x:0,y:0},
    "SAMURAI":{en:"SAMURAI",cn:"武士",jp:"武士",x:0,y:0},
    "SHOGUNSON":{en:"Ryūnosuke",cn:"龙之介",jp:"龍之介",x:0,y:0},
    "SHOGUN":{en:"Shogun",cn:"将军",jp:"将軍",x:0,y:0},
    "GENERAL":{en:"Okkoto",cn:"乙事",jp:"乙事",x:0,y:0},
    "DAIMYO":{en:"Yabu",cn:"薮",jp:"薮",x:0,y:0},
    "OFFICIAL":{en:"Official",cn:"官员",jp:"Official",x:0,y:0},
    "HUSBAND":{en:"HUSBAND",cn:"平民",jp:"HUSBAND",x:0,y:0}
}