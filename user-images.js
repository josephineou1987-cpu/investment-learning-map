const suppliedImages={
 '用一条线区分两种投资身份':{src:'stocks-bonds',title:'股票与债券的区别',note:'图中所说的“债券风险较低”“仅次于银行”等并非对所有债券都成立：风险、流动性和清偿顺序取决于发行人及具体条款。到期本金返还也以发行人履约为前提。'},
 '把未来的钱搬回今天':{src:'discount',title:'折现与时间价值',note:'图中“一年后 10,000 元”按 5% 折现，现值约 9,523.81 元；按 10% 折现约 9,090.91 元。时间越长、现值越低的方向需假定正折现率等条件不变。'},
 '股票回报由两部分组成':{src:'returns',title:'股票回报来源',note:'图中“买入、持有、卖出”是投资过程的三个阶段；通常计算回报时的两个组成部分是持有期间的现金股息与股价变化。买入本身不是一项收益。'},
 '分散投资能解决哪一部分风险？':{src:'risk',title:'系统性风险与个别风险',note:'分散投资通常能降低公司特有风险，但不能完全消除共同市场风险；图中的门店故事是简化类比。'},
 '从公司到买入判断':{src:'value-price',title:'价值与价格',note:'价值是基于假设的估计，价格由市场交易形成。实际回报同时受买入价格、卖出价格和现金分配等影响。'},
 '为什么利率变化会影响旧债价格？':{src:'bond-yield',title:'债券价格与收益率的关系',note:'固定现金流的普通债券，在现金流、信用风险等其他条件不变时，市场要求收益率上升，价格通常下降。'},
 '久期是利率变化的敏感度尺子':{src:'duration',title:'久期与价格敏感度',note:'图中 2% 与 8% 跌幅将 2 和 8 视作修正久期，是线性近似；实际价格可能因凸性等因素不同。短久期不代表信用风险一定较低。'}
};
const moreFigures={
 valuation:{src:'valuation',title:'股票估值方法选择图',note:'图中的第一项应读作“股息稳定且可合理预测”，而非“股累”。自由现金流不必每年都为正或稳定，关键是能否对未来现金流作出合理预测并匹配折现率。'},
 'valuation-compare':{src:'valuation-compare',title:'四种股票估值方法对比',note:'自由现金流公式需分清口径：FCFE 用股权成本折现得到股权价值；FCFF 用 WACC 折现得到经营价值，之后需进行债务、现金等调整，不能直接当作每股价格。'},
 'return-formula':{src:'return-formula',title:'股票总回报率公式'},
 'profit-cash':{src:'profit-cash',title:'企业利润与现金流'},
 'ev-equity':{src:'ev-equity',title:'企业价值与股权价值',note:'图中数字例子中债务和现金之间的符号误写为减号；正确是 100 − 30 + 10 = 80 万元。图中的关系是简化估算，实际需检查非经营性资产和其他权利等调整。'},
 dcf:{src:'dcf',title:'DCF 现金流折现',note:'图中末尾每股价值应为“调整后的股权价值 ÷ 股数”；现金流口径和折现率需匹配。FCFF 与 FCFE 估值的结果口径不同。'},
 ddm:{src:'ddm',title:'DDM 股息折现',note:'图中部分箭头方向容易混淆；折现的意思是把预计未来股息换算为今天的现值。'},
 pe:{src:'pe',title:'PE 市盈率'},pb:{src:'pb',title:'PB 市净率'},capm:{src:'capm',title:'CAPM 公式拆解'},
 'risk-return':{src:'risk-return',title:'风险与回报',note:'图中的曲线只是示意，并不表示所有资产收益都服从这种分布。'},
 diversification:{src:'diversification',title:'分散投资与相关性',note:'曲线是教学示意，不代表这些资产之间的实际或固定相关性；相关性会随时间变化。'},
 beta:{src:'beta',title:'Beta 系数',note:'市场上涨 1% 时的数值是对市场相关部分的简化说明，不是股票实际涨幅的保证。'},
 'basis-points':{src:'basis-points',title:'基点、百分点与百分比'},
 'bond-cashflow':{src:'bond-cashflow',title:'债券现金流时间轴'},
 'bond-price':{src:'bond-price',title:'债券定价与现金流折现'},
 'coupon-ytm':{src:'coupon-ytm',title:'票面利率与到期收益率'},
 'discount-par-premium':{src:'discount-par-premium',title:'折价、平价与溢价债券',note:'以普通固定票息债券、现金流按约支付、相同计价口径为前提；比较价格时需区分净价和全价。'},
 'yield-curves':{src:'yield-curves',title:'收益率曲线：三种形态',note:'曲线反映期限溢价、市场预期等多种因素；图中的经济和政策解释是可能情景，不能据此单独确定未来走势。'},
 'duration-types':{src:'duration-types',title:'麦考莱久期与修正久期',note:'图中时间轴仅示意部分现金流；修正久期与收益率变化的关系是假设现金流不变时的小幅变化近似。'}
};
function suppliedFigure(o){return `<figure class="supplied-figure" data-title="${o.title}">${o.src==='stocks-bonds'?'':`<h4>${o.title}</h4>`}<a href="images/${o.src}.webp" target="_blank" rel="noopener" aria-label="放大查看${o.title}"><img src="images/${o.src}.webp" alt="${o.title}学习图解" loading="lazy"></a>${o.note?`<div class="figure-note"><strong>阅读提示：</strong>${o.note}</div>`:''}</figure>`}
function insertSuppliedImages(n){const article=document.querySelector('.article');article.querySelectorAll('.visual-map').forEach(el=>{let title=el.querySelector('h4')?.textContent.trim();if(suppliedImages[title])el.outerHTML=suppliedFigure(suppliedImages[title])});
const addAfter=(selector,items)=>{let el=selector();if(el)el.insertAdjacentHTML('afterend',items.map(k=>suppliedFigure(moreFigures[k])).join(''));else console.error('Missing image anchor:',items.join(','))};
const heading=txt=>[...article.querySelectorAll('h3,h4')].find(h=>h.textContent.includes(txt));const figure=txt=>[...article.querySelectorAll('.supplied-figure')].find(f=>f.dataset.title?.includes(txt));
if(n===2){let h=heading('货币的时间价值');if(h)h.insertAdjacentHTML('beforebegin','<h3>基点、百分点与百分比</h3>'+suppliedFigure(moreFigures['basis-points']))}
if(n===4){addAfter(()=>figure('股票回报来源'),['return-formula']);addAfter(()=>figure('系统性风险与个别风险'),['risk-return','diversification','beta','capm']);addAfter(()=>figure('价值与价格'),['valuation','valuation-compare']);addAfter(()=>heading('股息折现：'),['ddm']);addAfter(()=>heading('自由现金流：'),['profit-cash','dcf','ev-equity']);addAfter(()=>heading('PE / PB：'),['pe','pb'])}
if(n===5){addAfter(()=>heading('债券基础'),['bond-cashflow']);addAfter(()=>figure('债券价格与收益率的关系'),['bond-price','coupon-ytm','discount-par-premium']);addAfter(()=>heading('收益率曲线'),['yield-curves']);addAfter(()=>figure('久期与价格敏感度'),['duration-types'])}}
