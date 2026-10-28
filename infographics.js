const iconShapes={
 shop:'<path d="M22 48h96v57H22zM17 46l10-27h86l10 27"/><path d="M18 46c0 11 18 11 18 0 0 11 18 11 18 0 0 11 18 11 18 0 0 11 18 11 18 0 0 11 18 11 18 0"/><path d="M40 105V68h22v37M76 68h24v22H76z"/>',
 note:'<rect x="31" y="15" width="78" height="92" rx="9"/><path d="M48 37h44M48 50h44M48 63h28"/><circle cx="91" cy="87" r="15"/><path d="M86 87l4 4 7-8"/>',
 wallet:'<rect x="20" y="35" width="98" height="62" rx="11"/><path d="M25 35V25c0-4 4-7 8-7h68v17M87 61h31v22H87a11 11 0 010-22z"/><circle cx="94" cy="72" r="2"/>',
 coin:'<circle cx="70" cy="60" r="37"/><circle cx="70" cy="60" r="28"/><path d="M57 43l13 16 13-16M70 59v20M59 61h22M59 69h22"/>',
 calendar:'<rect x="24" y="25" width="92" height="78" rx="8"/><path d="M24 48h92M47 15v20M93 15v20M42 65h16v16H42zM70 65h16v16H70z"/>',
 clock:'<circle cx="70" cy="60" r="40"/><path d="M70 33v28l21 13M70 15v8M25 60h8M107 60h8"/>',
 chart:'<path d="M22 99V22M22 99h100M33 84l22-21 19 9 31-36M94 36h11v12"/><path d="M39 99V82M60 99V70M81 99V76M102 99V48"/>',
 dividend:'<circle cx="71" cy="53" r="31"/><path d="M58 43l13 15 13-15M71 58v18M60 61h22M60 68h22M29 98h82"/>',
 globe:'<circle cx="70" cy="60" r="40"/><path d="M30 60h80M70 20c-25 18-25 62 0 80M70 20c25 18 25 62 0 80M39 39h62M39 81h62"/>',
 umbrella:'<path d="M17 57a53 53 0 01106 0c-9-6-18-6-27 0-9-6-18-6-27 0-9-6-18-6-27 0-9-6-17-6-25 0zM70 57v35c0 15 19 15 19 2"/>',
 seesaw:'<path d="M16 80l106-36M57 100l15-27 15 27zM49 100h46"/><circle cx="28" cy="70" r="11"/><path d="M95 39V23h24v16z"/>',
 ruler:'<rect x="22" y="38" width="96" height="42" rx="5"/><path d="M38 38v15M51 38v10M64 38v15M77 38v10M90 38v15M103 38v10M25 100h88"/>',
 bolt:'<path d="M77 17L42 65h25l-5 39 38-53H75z"/>'};
function ico(name){return `<svg viewBox="0 0 140 120" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">${iconShapes[name]}</svg>`}
function card(title,intro,panels,footer){return `<section class="infographic"><h4>${title}</h4><p class="info-intro">${intro}</p><div class="info-grid ${panels.length===2?'two':''}">${panels.map((p,i)=>`<div class="info-panel ${p[3]||''}"><span class="info-index">${i+1}</span>${ico(p[0])}<h5>${p[1]}</h5><p>${p[2]}</p></div>`).join('')}</div><div class="info-footer">${footer}</div></section>`}
const infoCards={
 '用一条线区分两种投资身份':card('一张图看懂：股票与债券','同样是把钱交给一家咖啡店，你拥有的权利却不一样。',[
 ['shop','买股票：成为股东','你拥有公司的一部分。可能分享利润和成长，也要承担股价下跌的风险。'],
 ['note','买债券：成为债权人','你把钱借给发行人，按条款收取利息和本金；发行人仍可能违约。','warm']],'<b>记住：</b>股票关注“生意值多少”；债券关注“能否按约还款，以及市场利率”。清偿顺序通常是债权人先于股东。'),
 '股票回报由两部分组成':card('一张图看懂：股票的回报来源','用一股股票的买入、持有和卖出，拆开总回报。',[
 ['shop','① 买入','假设用 10 元买入一股，成为这家公司的小股东。'],
 ['dividend','② 持有','期间收到 0.5 元现金股息；股息不是保证的。','gold'],
 ['chart','③ 卖出','假设以 12 元卖出，价格上涨带来 2 元收益。','warm']],'<b>总回报：</b>（12 − 10 + 0.5）÷ 10 = 25%。这是教学示例，不含税费和再投资。'),
 '把未来的钱搬回今天':card('一张图看懂：折现与时间价值','折现就是把将来收到的钱，换算成今天相当于多少。',[
 ['calendar','① 未来收到的钱','假设一年后收到 105 元。'],
 ['clock','② 考虑等待时间','按每年 5% 的要求回报率，把未来的钱往今天折算。','gold'],
 ['coin','③ 得到今天的价值','105 ÷ 1.05 = 100 元。','warm']],'<b>观察方向：</b>在其他条件相同时，要求回报率越高，未来同一笔钱的现值通常越低。'),
 '分散投资能解决哪一部分风险？':card('一张图看懂：两种风险','风险来源不同，分散投资能发挥的作用也不同。',[
 ['shop','公司特有风险','例如一家咖啡店经营失误。持有不同公司的资产，通常可以降低这部分风险。'],
 ['umbrella','市场共同风险','例如整体经济冲击，就像一场雨影响整座城市；分散不能完全消除。','warm']],'<b>记住：</b>分散投资有助于降低个别风险，但不保证盈利，也无法消除全部风险。'),
 '为什么利率变化会影响旧债价格？':card('一张图看懂：利率与债券价格','为什么新债利率变化，会影响已经发行的旧债？',[
 ['note','① 旧债票息固定','假设旧债面值 100 元，每年固定付 5 元。'],
 ['chart','② 市场要求收益率上升','新发行的可比债券可能提供更高收益，旧债的固定票息相对不那么吸引。','gold'],
 ['seesaw','③ 旧债价格通常下降','旧债价格降低后，新买家才可能获得更有竞争力的收益率。','warm']],'<b>方向：</b>市场要求收益率 ↑ → 固定票息债价格通常 ↓。假设现金流、信用风险等其他条件不变。'),
 '久期是利率变化的敏感度尺子':card('一张图看懂：久期','久期像一把尺子，帮助估计债券价格对收益率变化有多敏感。',[
 ['ruler','短修正久期','同样的收益率小幅变动下，价格变化通常较小。'],
 ['bolt','长修正久期','同样的收益率小幅变动下，价格变化通常较大。','warm']],'<b>例子：</b>修正久期为 5，收益率上升 0.2 个百分点时，价格约下降 1%。这是现金流不变时的小幅变动近似。')
};
function upgradeIllustrations(){document.querySelectorAll('.visual-map').forEach(el=>{const title=el.querySelector('h4')?.textContent.trim();if(infoCards[title])el.outerHTML=infoCards[title]})}
