// Define main function (script entry)

// 规则
const rules = [
  "DOMAIN-SUFFIX,duckduckgo.com,🪜 代理",
  "DOMAIN-KEYWORD,mousegesturesapi,REJECT",
  "DOMAIN-SUFFIX,linuxmail.cc,🪜 代理",
  "DOMAIN-KEYWORD,binance,coin",
  "DOMAIN-KEYWORD,unpkg,DIRECT",
  "DOMAIN-KEYWORD,天猫机场,🪜 代理",
  "DOMAIN-KEYWORD,52pokemon,🪜 代理",
  "DOMAIN-SUFFIX,civitai.com,🪜 代理",
  "DOMAIN-SUFFIX,github.com,🪜 代理",
  "DOMAIN-SUFFIX,graalvm.org,🪜 代理",
  "DOMAIN-SUFFIX,linux.do,🪜 代理",
  "DOMAIN-SUFFIX,wallhaven.cc,🪜 代理",
  "DOMAIN-SUFFIX,v2ex.com,🪜 代理",
  "DOMAIN-SUFFIX,grok.com,🪜 代理",
  "DOMAIN-SUFFIX,pika.art,🪜 代理",
  "DOMAIN-SUFFIX,serv00.com,DIRECT",
  "DOMAIN-SUFFIX,download-cdn.jetbrains.com,DIRECT",
  "PROCESS-NAME,v2ray,DIRECT",
  "PROCESS-NAME,xray,DIRECT",
  "PROCESS-NAME,naive,DIRECT",
  "PROCESS-NAME,trojan,DIRECT",
  "PROCESS-NAME,trojan-go,DIRECT",
  "PROCESS-NAME,ss-local,DIRECT",
  "PROCESS-NAME,privoxy,DIRECT",
  "PROCESS-NAME,leaf,DIRECT",
  "PROCESS-NAME,v2ray.exe,DIRECT",
  "PROCESS-NAME,xray.exe,DIRECT",
  "PROCESS-NAME,naive.exe,DIRECT",
  "PROCESS-NAME,trojan.exe,DIRECT",
  "PROCESS-NAME,trojan-go.exe,DIRECT",
  "PROCESS-NAME,ss-local.exe,DIRECT",
  "PROCESS-NAME,privoxy.exe,DIRECT",
  "PROCESS-NAME,leaf.exe,DIRECT",
  "PROCESS-NAME,Surge,DIRECT",
  "PROCESS-NAME,Surge 2,DIRECT",
  "PROCESS-NAME,Surge 3,DIRECT",
  "PROCESS-NAME,Surge 4,DIRECT",
  "PROCESS-NAME,Surge%202,DIRECT",
  "PROCESS-NAME,Surge%203,DIRECT",
  "PROCESS-NAME,Surge%204,DIRECT",
  "PROCESS-NAME,Thunder,DIRECT",
  "PROCESS-NAME,DownloadService,DIRECT",
  "PROCESS-NAME,qBittorrent,DIRECT",
  "PROCESS-NAME,Transmission,DIRECT",
  "PROCESS-NAME,fdm,DIRECT",
  "PROCESS-NAME,aria2c,DIRECT",
  "PROCESS-NAME,Folx,DIRECT",
  "PROCESS-NAME,NetTransport,DIRECT",
  "PROCESS-NAME,uTorrent,DIRECT",
  "PROCESS-NAME,WebTorrent,DIRECT",
  "PROCESS-NAME,aria2c.exe,DIRECT",
  "PROCESS-NAME,BitComet.exe,DIRECT",
  "PROCESS-NAME,fdm.exe,DIRECT",
  "PROCESS-NAME,NetTransport.exe,DIRECT",
  "PROCESS-NAME,qbittorrent.exe,DIRECT",
  "PROCESS-NAME,Thunder.exe,DIRECT",
  "PROCESS-NAME,ThunderVIP.exe,DIRECT",
  "PROCESS-NAME,transmission-daemon.exe,DIRECT",
  "PROCESS-NAME,transmission-qt.exe,DIRECT",
  "PROCESS-NAME,uTorrent.exe,DIRECT",
  "PROCESS-NAME,WebTorrent.exe,DIRECT",
  "DOMAIN,clash.razord.top,DIRECT",
  "DOMAIN,yacd.haishan.me,DIRECT",
  "PROCESS-NAME,OneDrive,Ⓜ️ 微软服务",
  "PROCESS-NAME,OneDriveUpdater,Ⓜ️ 微软服务",
  "DOMAIN-KEYWORD,1drv,Ⓜ️ 微软服务",
  "DOMAIN-KEYWORD,onedrive,Ⓜ️ 微软服务",
  "DOMAIN-KEYWORD,skydrive,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,livefilestore.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,oneclient.sfx.ms,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,onedrive.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,onedrive.live.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,photos.live.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,sharepoint.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,sharepointonline.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,skydrive.wns.windows.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,spoprod-a.akamaihd.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,storage.live.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,storage.msn.com,Ⓜ️ 微软服务",
  "DOMAIN-KEYWORD,1drv,Ⓜ️ 微软服务",
  "DOMAIN-KEYWORD,microsoft,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,aadrm.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,acompli.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,acompli.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,aka.ms,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,akadns.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,aspnetcdn.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,assets-yammer.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,azure.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,azure.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,azureedge.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,azurerms.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,bing.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,cloudapp.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,cloudappsecurity.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,edgesuite.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,gfx.ms,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,hotmail.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,live.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,live.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,lync.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msappproxy.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msauth.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msauthimages.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msecnd.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msedge.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msft.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msftauth.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msftauthimages.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msftidentity.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msidentity.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msn.cn,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msn.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msocdn.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,msocsp.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,mstea.ms,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,o365weve.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,oaspapps.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,office.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,office.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,office365.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,officeppe.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,omniroot.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,onedrive.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,onenote.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,onenote.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,onestore.ms,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,outlook.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,outlookmobile.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,phonefactor.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,public-trust.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,sfbassets.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,sfx.ms,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,sharepoint.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,sharepointonline.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,skype.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,skypeassets.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,skypeforbusiness.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,staffhub.ms,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,svc.ms,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,sway-cdn.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,sway-extensions.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,sway.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,trafficmanager.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,uservoice.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,virtualearth.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,visualstudio.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,windows-ppe.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,windows.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,windows.net,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,windowsazure.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,windowsupdate.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,wunderlist.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,yammer.com,Ⓜ️ 微软服务",
  "DOMAIN-SUFFIX,yammerusercontent.com,Ⓜ️ 微软服务",
  "PROCESS-NAME,com.amazon.firetv.youtube,📺 Youtube",
  "DOMAIN-SUFFIX,youtu.be,📺 Youtube",
  "DOMAIN-SUFFIX,googlevideo.com,📺 Youtube",
  "DOMAIN,youtubei.googleapis.com,📺 Youtube",
  "DOMAIN-KEYWORD,youtube,📺 Youtube",
  "RULE-SET,lancidr,DIRECT",
  "RULE-SET,cncidr,DIRECT",
  "GEOIP,CN,DIRECT",
  "RULE-SET,private,⛓️ 私有网络",
  "RULE-SET,direct,🌏 全球直连",
  "RULE-SET,icloud,☁️ Icloud",
  "RULE-SET,apple,📱 Apple",
  "RULE-SET,google,📫 Google",
  "RULE-SET,reject,🛑 全球拦截",
  "RULE-SET,telegramcidr,📲 Telegram",
  "RULE-SET,openai,🤖 OpenAI",
  "RULE-SET,gfw,🪜 代理",
  "RULE-SET,proxy,🪜 代理",
  "MATCH,🐟 未命中规则",
];

// 地区对象name 地区，ext 额外匹配参数，如英国、GB等
let areas = [
  { flag: "🇦🇨", name: "阿森松岛" },
  { flag: "🇦🇩", name: "安道尔" },
  { flag: "🇦🇪", name: "阿拉伯联合酋长国" },
  { flag: "🇦🇫", name: "阿富汗" },
  { flag: "🇦🇬", name: "安提瓜和巴布达" },
  { flag: "🇦🇮", name: "安圭拉" },
  { flag: "🇦🇱", name: "阿尔巴尼亚" },
  { flag: "🇦🇲", name: "亚美尼亚" },
  { flag: "🇦🇴", name: "安哥拉" },
  { flag: "🇦🇶", name: "南极洲" },
  { flag: "🇦🇷", name: "阿根廷" },
  { flag: "🇦🇸", name: "美属萨摩亚" },
  { flag: "🇦🇹", name: "奥地利" },
  { flag: "🇦🇺", name: "澳大利亚", ext: ["悉尼"] },
  { flag: "🇦🇼", name: "阿鲁巴" },
  { flag: "🇦🇽", name: "奥兰群岛" },
  { flag: "🇦🇿", name: "阿塞拜疆" },
  { flag: "🇧🇦", name: "波斯尼亚和黑塞哥维那" },
  { flag: "🇧🇧", name: "巴巴多斯" },
  { flag: "🇧🇩", name: "孟加拉国" },
  { flag: "🇧🇪", name: "比利时" },
  { flag: "🇧🇫", name: "布基纳法索" },
  { flag: "🇧🇬", name: "保加利亚" },
  { flag: "🇧🇭", name: "巴林" },
  { flag: "🇧🇮", name: "布隆迪" },
  { flag: "🇧🇯", name: "贝宁" },
  { flag: "🇧🇱", name: "圣巴泰勒米" },
  { flag: "🇧🇲", name: "百慕大" },
  { flag: "🇧🇳", name: "文莱" },
  { flag: "🇧🇴", name: "玻利维亚" },
  { flag: "🇧🇶", name: "荷属加勒比区" },
  { flag: "🇧🇷", name: "巴西" },
  { flag: "🇧🇸", name: "巴哈马" },
  { flag: "🇧🇹", name: "不丹" },
  { flag: "🇧🇻", name: "布韦岛" },
  { flag: "🇧🇼", name: "博茨瓦纳" },
  { flag: "🇧🇾", name: "白俄罗斯" },
  { flag: "🇧🇿", name: "伯利兹" },
  { flag: "🇨🇦", name: "加拿大" },
  { flag: "🇨🇨", name: "科科斯（基林）群岛" },
  { flag: "🇨🇩", name: "刚果（金）" },
  { flag: "🇨🇫", name: "中非共和国" },
  { flag: "🇨🇬", name: "刚果（布）" },
  { flag: "🇨🇭", name: "瑞士" },
  { flag: "🇨🇮", name: "科特迪瓦" },
  { flag: "🇨🇰", name: "库克群岛" },
  { flag: "🇨🇱", name: "智利" },
  { flag: "🇨🇲", name: "喀麦隆" },
  { flag: "🇨🇳", name: "中国" },
  { flag: "🇨🇴", name: "哥伦比亚" },
  { flag: "🇨🇵", name: "克利珀顿岛" },
  { flag: "🇨🇷", name: "哥斯达黎加" },
  { flag: "🇨🇺", name: "古巴" },
  { flag: "🇨🇻", name: "佛得角" },
  { flag: "🇨🇼", name: "库拉索" },
  { flag: "🇨🇽", name: "圣诞岛" },
  { flag: "🇨🇾", name: "塞浦路斯" },
  { flag: "🇨🇿", name: "捷克" },
  { flag: "🇩🇪", name: "德国" },
  { flag: "🇩🇬", name: "迪戈加西亚岛" },
  { flag: "🇩🇯", name: "吉布提" },
  { flag: "🇩🇰", name: "丹麦" },
  { flag: "🇩🇲", name: "多米尼克" },
  { flag: "🇩🇴", name: "多米尼加共和国" },
  { flag: "🇩🇿", name: "阿尔及利亚" },
  { flag: "🇪🇦", name: "休达及梅利利亚" },
  { flag: "🇪🇨", name: "厄瓜多尔" },
  { flag: "🇪🇪", name: "爱沙尼亚" },
  { flag: "🇪🇬", name: "埃及" },
  { flag: "🇪🇭", name: "西撒哈拉" },
  { flag: "🇪🇷", name: "厄立特里亚" },
  { flag: "🇪🇸", name: "西班牙" },
  { flag: "🇪🇹", name: "埃塞俄比亚" },
  { flag: "🇪🇺", name: "欧盟" },
  { flag: "🇫🇮", name: "芬兰" },
  { flag: "🇫🇯", name: "斐济" },
  { flag: "🇫🇰", name: "福克兰群岛" },
  { flag: "🇫🇲", name: "密克罗尼西亚" },
  { flag: "🇫🇴", name: "法罗群岛" },
  { flag: "🇫🇷", name: "法国" },
  { flag: "🇬🇦", name: "加蓬" },
  { flag: "🇬🇧", name: "英国", ext: ["GB"] },
  { flag: "🇬🇩", name: "格林纳达" },
  { flag: "🇬🇪", name: "格鲁吉亚" },
  { flag: "🇬🇫", name: "法属圭亚那" },
  { flag: "🇬🇬", name: "根西岛" },
  { flag: "🇬🇭", name: "加纳" },
  { flag: "🇬🇮", name: "直布罗陀" },
  { flag: "🇬🇱", name: "格陵兰" },
  { flag: "🇬🇲", name: "冈比亚" },
  { flag: "🇬🇳", name: "几内亚" },
  { flag: "🇬🇵", name: "瓜德罗普" },
  { flag: "🇬🇶", name: "赤道几内亚" },
  { flag: "🇬🇷", name: "希腊" },
  { flag: "🇬🇸", name: "南乔治亚和南桑威奇群岛" },
  { flag: "🇬🇹", name: "危地马拉" },
  { flag: "🇬🇺", name: "关岛" },
  { flag: "🇬🇼", name: "几内亚比绍" },
  { flag: "🇬🇾", name: "圭亚那" },
  { flag: "🇭🇰", name: "香港", ext: ["HK"] },
  { flag: "🇭🇲", name: "赫德岛和麦克唐纳群岛" },
  { flag: "🇭🇳", name: "洪都拉斯" },
  { flag: "🇭🇷", name: "克罗地亚" },
  { flag: "🇭🇹", name: "海地" },
  { flag: "🇭🇺", name: "匈牙利" },
  { flag: "🇮🇨", name: "加纳利群岛" },
  { flag: "🇮🇩", name: "印度尼西亚" },
  { flag: "🇮🇪", name: "爱尔兰" },
  { flag: "🇮🇱", name: "以色列" },
  { flag: "🇮🇲", name: "马恩岛" },
  { flag: "🇮🇳", name: "印度" },
  { flag: "🇮🇴", name: "英属印度洋领地" },
  { flag: "🇮🇶", name: "伊拉克" },
  { flag: "🇮🇷", name: "伊朗" },
  { flag: "🇮🇸", name: "冰岛" },
  { flag: "🇮🇹", name: "意大利" },
  { flag: "🇯🇪", name: "泽西岛" },
  { flag: "🇯🇲", name: "牙买加" },
  { flag: "🇯🇴", name: "约旦" },
  { flag: "🇯🇵", name: "日本", ext: ["JP"] },
  { flag: "🇰🇪", name: "肯尼亚" },
  { flag: "🇰🇬", name: "吉尔吉斯斯坦" },
  { flag: "🇰🇭", name: "柬埔寨" },
  { flag: "🇰🇮", name: "基里巴斯" },
  { flag: "🇰🇲", name: "科摩罗" },
  { flag: "🇰🇳", name: "圣基茨和尼维斯" },
  { flag: "🇰🇵", name: "朝鲜" },
  { flag: "🇰🇷", name: "韩国" },
  { flag: "🇰🇼", name: "科威特" },
  { flag: "🇰🇾", name: "开曼群岛" },
  { flag: "🇰🇿", name: "哈萨克斯坦" },
  { flag: "🇱🇦", name: "老挝" },
  { flag: "🇱🇧", name: "黎巴嫩" },
  { flag: "🇱🇨", name: "圣卢西亚" },
  { flag: "🇱🇮", name: "列支敦士登" },
  { flag: "🇱🇰", name: "斯里兰卡" },
  { flag: "🇱🇷", name: "利比里亚" },
  { flag: "🇱🇸", name: "莱索托" },
  { flag: "🇱🇹", name: "立陶宛" },
  { flag: "🇱🇺", name: "卢森堡" },
  { flag: "🇱🇻", name: "拉脱维亚" },
  { flag: "🇱🇾", name: "利比亚" },
  { flag: "🇲🇦", name: "摩洛哥" },
  { flag: "🇲🇨", name: "摩纳哥" },
  { flag: "🇲🇩", name: "摩尔多瓦" },
  { flag: "🇲🇪", name: "黑山" },
  { flag: "🇲🇫", name: "法属圣马丁" },
  { flag: "🇲🇬", name: "马达加斯加" },
  { flag: "🇲🇭", name: "马绍尔群岛" },
  { flag: "🇲🇰", name: "北马其顿" },
  { flag: "🇲🇱", name: "马里" },
  { flag: "🇲🇲", name: "缅甸" },
  { flag: "🇲🇳", name: "蒙古" },
  { flag: "🇲🇴", name: "澳门" },
  { flag: "🇲🇵", name: "北马里亚纳群岛" },
  { flag: "🇲🇶", name: "马提尼克" },
  { flag: "🇲🇷", name: "毛里塔尼亚" },
  { flag: "🇲🇸", name: "蒙特塞拉特" },
  { flag: "🇲🇹", name: "马耳他" },
  { flag: "🇲🇺", name: "毛里求斯" },
  { flag: "🇲🇻", name: "马尔代夫" },
  { flag: "🇲🇼", name: "马拉维" },
  { flag: "🇲🇽", name: "墨西哥" },
  { flag: "🇲🇾", name: "马来西亚" },
  { flag: "🇲🇿", name: "莫桑比克" },
  { flag: "🇳🇦", name: "纳米比亚" },
  { flag: "🇳🇨", name: "新喀里多尼亚" },
  { flag: "🇳🇪", name: "尼日尔" },
  { flag: "🇳🇫", name: "诺福克岛" },
  { flag: "🇳🇬", name: "尼日利亚" },
  { flag: "🇳🇮", name: "尼加拉瓜" },
  { flag: "🇳🇱", name: "荷兰" },
  { flag: "🇳🇴", name: "挪威" },
  { flag: "🇳🇵", name: "尼泊尔" },
  { flag: "🇳🇷", name: "瑙鲁" },
  { flag: "🇳🇺", name: "纽埃" },
  { flag: "🇳🇿", name: "新西兰" },
  { flag: "🇴🇲", name: "阿曼" },
  { flag: "🇵🇦", name: "巴拿马" },
  { flag: "🇵🇪", name: "秘鲁" },
  { flag: "🇵🇫", name: "法属波利尼西亚" },
  { flag: "🇵🇬", name: "巴布亚新几内亚" },
  { flag: "🇵🇭", name: "菲律宾" },
  { flag: "🇵🇰", name: "巴基斯坦" },
  { flag: "🇵🇱", name: "波兰" },
  { flag: "🇵🇲", name: "圣皮埃尔和密克隆群岛" },
  { flag: "🇵🇳", name: "皮特凯恩群岛" },
  { flag: "🇵🇷", name: "波多黎各" },
  { flag: "🇵🇸", name: "巴勒斯坦领土" },
  { flag: "🇵🇹", name: "葡萄牙" },
  { flag: "🇵🇼", name: "帕劳" },
  { flag: "🇵🇾", name: "巴拉圭" },
  { flag: "🇶🇦", name: "卡塔尔" },
  { flag: "🇷🇪", name: "留尼汪" },
  { flag: "🇷🇴", name: "罗马尼亚" },
  { flag: "🇷🇸", name: "塞尔维亚" },
  { flag: "🇷🇺", name: "俄罗斯" },
  { flag: "🇷🇼", name: "卢旺达" },
  { flag: "🇸🇦", name: "沙特阿拉伯" },
  { flag: "🇸🇧", name: "所罗门群岛" },
  { flag: "🇸🇨", name: "塞舌尔" },
  { flag: "🇸🇩", name: "苏丹" },
  { flag: "🇸🇪", name: "瑞典" },
  { flag: "🇸🇬", name: "新加坡" },
  { flag: "🇸🇬", name: "SGP" },
  { flag: "🇸🇭", name: "圣赫勒拿" },
  { flag: "🇸🇮", name: "斯洛文尼亚" },
  { flag: "🇸🇯", name: "斯瓦尔巴和扬马延" },
  { flag: "🇸🇰", name: "斯洛伐克" },
  { flag: "🇸🇱", name: "塞拉利昂" },
  { flag: "🇸🇲", name: "圣马力诺" },
  { flag: "🇸🇳", name: "塞内加尔" },
  { flag: "🇸🇴", name: "索马里" },
  { flag: "🇸🇷", name: "苏里南" },
  { flag: "🇸🇸", name: "南苏丹" },
  { flag: "🇸🇹", name: "圣多美和普林西比" },
  { flag: "🇸🇻", name: "萨尔瓦多" },
  { flag: "🇸🇽", name: "荷属圣马丁" },
  { flag: "🇸🇾", name: "叙利亚" },
  { flag: "🇸🇿", name: "斯威士兰" },
  { flag: "🇹🇦", name: "特里斯坦-达库尼亚群岛" },
  { flag: "🇹🇨", name: "特克斯和凯科斯群岛" },
  { flag: "🇹🇩", name: "乍得" },
  { flag: "🇹🇫", name: "法属南部领地" },
  { flag: "🇹🇬", name: "多哥" },
  { flag: "🇹🇭", name: "泰国" },
  { flag: "🇹🇯", name: "塔吉克斯坦" },
  { flag: "🇹🇰", name: "托克劳" },
  { flag: "🇹🇱", name: "东帝汶" },
  { flag: "🇹🇲", name: "土库曼斯坦" },
  { flag: "🇹🇳", name: "突尼斯" },
  { flag: "🇹🇴", name: "汤加" },
  { flag: "🇹🇷", name: "土耳其" },
  { flag: "🇹🇹", name: "特立尼达和多巴哥" },
  { flag: "🇹🇻", name: "图瓦卢" },
  { flag: "🇹🇼", name: "台湾", ext: ["TW"] },
  { flag: "🇹🇿", name: "坦桑尼亚" },
  { flag: "🇺🇦", name: "乌克兰" },
  { flag: "🇺🇬", name: "乌干达" },
  { flag: "🇺🇲", name: "美国本土外小岛屿" },
  { flag: "🇺🇳", name: "联合国" },
  { flag: "🇺🇸", name: "美国", ext: ["US"] },
  { flag: "🇺🇾", name: "乌拉圭" },
  { flag: "🇺🇿", name: "乌兹别克斯坦" },
  { flag: "🇻🇦", name: "梵蒂冈" },
  { flag: "🇻🇨", name: "圣文森特和格林纳丁斯" },
  { flag: "🇻🇪", name: "委内瑞拉" },
  { flag: "🇻🇬", name: "英属维尔京群岛" },
  { flag: "🇻🇮", name: "美属维尔京群岛" },
  { flag: "🇻🇳", name: "越南" },
  { flag: "🇻🇺", name: "瓦努阿图" },
  { flag: "🇼🇫", name: "瓦利斯和富图纳" },
  { flag: "🇼🇸", name: "萨摩亚" },
  { flag: "🇽🇰", name: "科索沃" },
  { flag: "🇾🇪", name: "也门" },
  { flag: "🇾🇹", name: "马约特" },
  { flag: "🇿🇦", name: "南非" },
  { flag: "🇿🇲", name: "赞比亚" },
  { flag: "🇿🇼", name: "津巴布韦 " },
];

// 规则集通用配置
const ruleProviderCommon = {
  type: "http",
  format: "yaml",
  interval: 86400,
};
// 规则集配置
const ruleProviders = {
  reject: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    path: "./ruleset/loyalsoldier/reject.yaml",
  },
  icloud: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    path: "./ruleset/loyalsoldier/icloud.yaml",
  },
  apple: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    path: "./ruleset/loyalsoldier/apple.yaml",
  },
  google: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    path: "./ruleset/loyalsoldier/google.yaml",
  },
  proxy: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    path: "./ruleset/loyalsoldier/proxy.yaml",
  },
  direct: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    path: "./ruleset/loyalsoldier/direct.yaml",
  },
  private: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    path: "./ruleset/loyalsoldier/private.yaml",
  },
  gfw: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    path: "./ruleset/loyalsoldier/gfw.yaml",
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    path: "./ruleset/loyalsoldier/tld-not-cn.yaml",
  },
  telegramcidr: {
    ...ruleProviderCommon,
    behavior: "ipcidr",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    path: "./ruleset/loyalsoldier/telegramcidr.yaml",
  },
  cncidr: {
    ...ruleProviderCommon,
    behavior: "ipcidr",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    path: "./ruleset/loyalsoldier/cncidr.yaml",
  },
  lancidr: {
    ...ruleProviderCommon,
    behavior: "ipcidr",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    path: "./ruleset/loyalsoldier/lancidr.yaml",
  },
  applications: {
    ...ruleProviderCommon,
    behavior: "classical",
    url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    path: "./ruleset/loyalsoldier/applications.yaml",
  },
  openai: {
    ...ruleProviderCommon,
    behavior: "classical",
    url: "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    path: "./ruleset/blackmatrix7/openai.yaml",
  },
};

//切换时间 5分钟
let intervalTime = 300;
//测速链接
let speedTestUrl = "https://www.gstatic.com/generate_204";

//需要代理的
let proxy = {
  name: "🪜 代理",
  type: "select",
  proxies: [
    "🌏 全球直连",
    "🛑 全球拦截",
    "♻️ 自动选择",
    "🔄 负载均衡",
    "✅ 选择地区",
    "✨ 选择节点",
  ],
};

//自动选择
let automatic = {
  name: "♻️ 自动选择",
  type: "url-test",
  url: speedTestUrl,
  interval: intervalTime, //更新周期
  proxies: [],
};
//负载均衡
let loadBalance = {
  name: "🔄 负载均衡",
  type: "load-balance",
  url: speedTestUrl,
  interval: intervalTime, //更新周期
  proxies: [],
};
//选择地区
let selectArea = {
  name: "✅ 选择地区",
  type: "select",
  interval: intervalTime, //更新周期
  proxies: ["♻️ 自动选择"],
};
//选择节点
let selectNode = {
  name: "✨ 选择节点",
  type: "select",
  interval: intervalTime, //更新周期
  proxies: ["♻️ 自动选择"],
};
//故障转移
let fallback = {
  name: "🔯 故障转移",
  type: "fallback",
  url: speedTestUrl,
  interval: intervalTime, //更新周期
  proxies: [],
};
//直连
let direct = {
  name: "🌏 全球直连",
  type: "select",
  proxies: ["DIRECT", "✅ 选择地区", "✨ 选择节点", "♻️ 自动选择"],
};
//阻止链接
let prevent = {
  name: "🛑 全球拦截",
  type: "select",
  proxies: ["REJECT", "DIRECT"],
};
//私有网络
let privateNetwork = {
  name: "⛓️ 私有网络",
  type: "select",
  proxies: [
    "🌏 全球直连",
    "🛑 全球拦截",
    "♻️ 自动选择",
    "✅ 选择地区",
    "✨ 选择节点",
  ],
};
//icloud
let icloud = {
  name: "☁️ Icloud",
  type: "select",
  proxies: [
    "♻️ 自动选择",
    "✅ 选择地区",
    "✨ 选择节点",
    "🌏 全球直连",
    "🛑 全球拦截",
  ],
};
//apple
let apple = {
  name: "📱 Apple",
  type: "select",
  proxies: [
    "♻️ 自动选择",
    "✅ 选择地区",
    "✨ 选择节点",
    "🌏 全球直连",
    "🛑 全球拦截",
  ],
};
//google
let google = {
  name: "📫 Google",
  type: "select",
  proxies: [
    "♻️ 自动选择",
    "✅ 选择地区",
    "✨ 选择节点",
    "🌏 全球直连",
    "🛑 全球拦截",
  ],
};

//telegram
let telegram = {
  name: "📲 Telegram",
  type: "select",
  proxies: [
    "♻️ 自动选择",
    "✅ 选择地区",
    "✨ 选择节点",
    "🌏 全球直连",
    "🛑 全球拦截",
  ],
};
//youtube
let youtube = {
  name: "📺 Youtube",
  type: "select",
  proxies: [
    "♻️ 自动选择",
    "✅ 选择地区",
    "✨ 选择节点",
    "🌏 全球直连",
    "🛑 全球拦截",
    "🔄 负载均衡",
  ],
};
//微软
let microsoft = {
  name: "Ⓜ️ 微软服务",
  type: "select",
  proxies: [
    "♻️ 自动选择",
    "✅ 选择地区",
    "✨ 选择节点",
    "🌏 全球直连",
    "🛑 全球拦截",
  ],
};
//OpenAI
let openai = {
  name: "🤖 OpenAI",
  type: "select",
  proxies: [
    "♻️ 自动选择",
    "✅ 选择地区",
    "✨ 选择节点",
    "🌏 全球直连",
    "🛑 全球拦截",
  ],
};
//coin
let coin = {
  name: "coin",
  type: "select",
  proxies: [
    "♻️ 自动选择",
    "✅ 选择地区",
    "✨ 选择节点",
    "🌏 全球直连",
    "🛑 全球拦截",
  ],
};
//其他没命中的
let others = {
  name: "🐟 未命中规则",
  type: "select",
  proxies: [
    "🌏 全球直连",
    "🛑 全球拦截",
    "♻️ 自动选择",
    "✅ 选择地区",
    "✨ 选择节点",
  ],
};

//内置代理规则
let builtInProxyGroups = [
  proxy,
  automatic,
  loadBalance,
  selectArea,
  selectNode,
  fallback,
  direct,
  prevent,
  privateNetwork,
  icloud,
  apple,
  google,
  telegram,
  youtube,
  microsoft,
  openai,
  coin,
  others,
];

/**
 * 匹配地区
 * @param {*} proxyName 节点名
 * @param {*} area 地区对象
 */
function matchArea(proxyName, area, excludes) {
  if (!proxyName) {
    return false;
  }

  if (excludes) {
    for (let excludeName of excludes) {
      if (proxyName.indexOf(excludeName) !== -1) {
        return false;
      }
    }
  }

  if (proxyName.indexOf(area.name) !== -1) {
    return true;
  }

  if (!area.ext) {
    return false;
  }
  for (let extName of area.ext) {
    if (proxyName.indexOf(extName) !== -1) {
      return true;
    }
  }
  return false;
}


// 添加地区组到预置分组
function addToPresetGroup(regionName) {
  selectArea["proxies"].push(regionName);
  fallback["proxies"].push(regionName);
  automatic["proxies"].push(regionName);
  google["proxies"].push(regionName);
  openai["proxies"].push(regionName);
  coin["proxies"].push(regionName);
}

// 处理未知地区分组
function handleUnknownAreaProxies(content) {
  // 已知地区的
  const added = new Set(selectNode["proxies"]);
  // 未知地区的
  const unknownAreaProxies = content.proxies
    .filter((proxy) => !added.has(proxy.name))
    .map((proxy) => proxy.name);

  for (let proxyName of unknownAreaProxies) {
    //选择节点
    selectNode["proxies"].push(proxyName);
    //负载均衡
    loadBalance["proxies"].push(proxyName);
  }

  console.log(unknownAreaProxies);
  // 保存未知地区的
  if (unknownAreaProxies.length > 0) {
    let areaJson = {};
    let regionName = "未知地区";
    areaJson["name"] = regionName;
    areaJson["type"] = "url-test";
    areaJson["proxies"] = unknownAreaProxies;
    areaJson["url"] = speedTestUrl;
    areaJson["interval"] = intervalTime;
    //放到yml中
    content["proxy-groups"].push(areaJson);
    //对几个预置的规则进行处理
    addToPresetGroup(regionName);
  }
}
function main(config, profileName) {
  let content = JSON.parse(JSON.stringify(config));
  //置空proxy-groups,添加自己的规则
  content["proxy-groups"] = [];
  content["rules"] = rules;
  // 覆盖原配置中的规则
  content["rule-providers"] = ruleProviders;

  //遍历地区来分组
  for (let area of areas) {
    let areaJson = {},
      proxies = [],
      regionName = area.flag + " " + area.name;
    for (let proxy of (content.proxies || content.proxy)) {
      if (proxy.server === undefined) break;
      //如果匹配上了就加入
      if (matchArea(proxy.name, area, "🔒")) {
        if (areaJson["name"] === regionName) {
          proxies.push(proxy.name);
        } else {
          proxies.push(proxy.name);
          areaJson["name"] = regionName;
        }
        //选择节点
        selectNode["proxies"].push(proxy.name);
        //负载均衡
        loadBalance["proxies"].push(proxy.name);
      } else {
        // console.log("匹配不成功", proxy.name, area.name)
      }
    }
    if (areaJson["name"]) {
      areaJson["type"] = "url-test";
      areaJson["proxies"] = proxies;
      areaJson["url"] = speedTestUrl;
      areaJson["interval"] = intervalTime;
      //放到yml中
      content["proxy-groups"].push(areaJson);
      //对几个预置的规则进行处理
      addToPresetGroup(regionName);
    }

  }

  // 处理未知地区分组
  handleUnknownAreaProxies(content);

  /**
   * 添加各种分组。
   *
   * {@link https://github.com/Loyalsoldier/clash-rules}
   */
  content["proxy-groups"] = builtInProxyGroups.concat(content["proxy-groups"]);

  // 禁用 dns解析，避免和openvpn冲突
  content['dns']['enable'] = false

  // 使用redir-host
  // content['dns']['enhanced-mode'] = 'redir-host'

  // console.log(content);
  return content;
}

