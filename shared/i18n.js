/* =========================================================
   DEBATIC — Thai → English for the player-facing pages.
   Pages are written and rendered in Thai. When the player picks
   EN in the top bar (setLang in app.js), this file translates
   whatever ends up on screen: every Thai text node, plus the
   placeholder / title / aria-label / alt attributes, including
   anything a page re-renders later (watched with a
   MutationObserver). Admin pages never load this file.

   How a piece of text is translated, in order:
   1. the whole text matches a dictionary entry exactly;
   2. longer dictionary phrases found inside the text are
      swapped in (handles sentences built from pieces, e.g. a
      notification that embeds a market question);
   3. any remaining run of Thai words is looked up on its own.
   Thai that still has no entry is left as-is and collected in
   window.__i18nMissing so it is easy to spot and add here.

   Markets created by an admin can carry their own English
   question/rules (m.questionEn / m.rulesEn); those are added to
   the dictionary at load time. User-written text (comments) is
   never touched: mark anything else that should stay as typed
   with data-no-i18n.
   ========================================================= */
const I18N_EN = {
"เช่น": "e.g.",
"รหัสแนะนำ (ถ้ามี)": "Referral code (optional)",
"ปิดรับการเทรดแล้ว": "Trading closed",
"รอผู้ดูแลตัดสินผล": "Awaiting resolution",
"รอตัดสินผล": "awaiting result",
"ปิดรับการเทรดแล้ว รอตัดสินผล": "Trading closed, awaiting result",
"รอผล": "Pending",
"ตลาดนี้ปิดรับการซื้อขายเมื่อ": "Trading in this market closed on",
"ปิดโดยผู้ดูแลระบบ": "closed by an admin",
"โพซิชันของคุณยังอยู่ครบ และจะได้รับเงินอัตโนมัติหากฝั่งของคุณชนะ": "your position is safe and pays out automatically if your side wins.",
"ปิดรับใน": "Closes in",
"ตลาดนี้ปิดรับการเทรดแล้ว": "Trading in this market has closed",
"ดูตลาดทั้งหมด →": "See all markets →",
"โฆษณา": "Ad",
"ติดแท็ก": "Tag",
"ติดแท็กแล้ว": "Tagged",
"ติดแท็กตลาดนี้แล้ว — ดูได้ที่ “ตลาดที่ติดแท็ก” ในหน้าตลาด": "Market tagged — find it under “Tagged markets” on the markets page",
"เอาออกจากตลาดที่ติดแท็กแล้ว": "Removed from tagged markets",
"ไม่พบตลาดที่ตรงกับคำค้นหา": "No markets match your search",
"ดูผลลัพธ์ทั้งหมด →": "See all results →",
"ตัวอย่างโฆษณาแถบซ้าย": "Sample sidebar ad",
"ตลาดที่เปิดอยู่": "open markets",
"GDP ของไทยปี 2026 จะเติบโตเกิน 3% หรือไม่?": "Will Thailand's GDP grow more than 3% in 2026?",
"ก": "P",
"ก.ค.": "Jul",
"ก.พ.": "Feb",
"ก.พ. 2026": "Feb 2026",
"ก.ย.": "Sep",
"กดไอคอน 🏷️ บนการ์ดตลาดที่คุณสนใจเพื่อติดแท็กไว้ที่นี่": "Tap the 🏷️ icon on any market card you're interested in to tag it here.",
"กติกาการตัดสิน": "Resolution rules",
"กติกาการตัดสินตามที่อธิบายไว้ข้างต้น": "Resolves according to the rules described above",
"กระทู้ที่คุณแนะนำจะยังไม่ขึ้นแสดงทันที — ผู้ดูแลระบบจะตรวจสอบและกดอนุมัติก่อน จึงจะปรากฏในหน้าตลาดให้ทุกคนเทรดได้": "Your suggested market won't appear right away — an admin will review and approve it first, and then it will show on the markets page for everyone to trade.",
"กระเป๋าเงิน": "Wallet",
"กระเป๋าเงิน — เงินสดคงเหลือ": "Wallet — available cash",
"กรุงเทพฯ จะได้รับผลกระทบจากพายุที่มีชื่อในเดือนตุลาคม 2026 หรือไม่?": "Will Bangkok be hit by a named storm in October 2026?",
"กรุณาระบุจำนวนหุ้นที่ต้องการขาย": "Please enter the number of shares to sell",
"กรุณาระบุจำนวนเงินที่จะเทรด": "Please enter an amount to trade",
"กรุณาระบุจำนวนเงินที่ต้องการถอน": "Please enter an amount to withdraw",
"กรุณาระบุจำนวนเงินที่ต้องการฝาก": "Please enter an amount to deposit",
"กรุณาระบุยอดฝากครั้งแรกของเพื่อนที่จะจำลอง": "Please enter the friend's first deposit to simulate",
"กรุณาใส่คำถามของกระทู้": "Please enter the market question",
"กลับไปที่หน้าตลาด": "Back to markets",
"กลับไปหน้าตลาด": "Back to markets",
"การฝากและถอนเงินทุกครั้งต้องได้รับการอนุมัติจากผู้ดูแลระดับสูงขึ้นไปก่อน จึงจะมีผลกับยอดคงเหลือของคุณ — โดยทั่วไปจะได้รับการตรวจสอบภายในไม่กี่นาที": "Every deposit and withdrawal must be approved by a senior admin before it affects your balance — reviews usually take just a few minutes.",
"การเงิน": "Finance",
"การเมือง": "Politics",
"การเลือกตั้งทั่วไปครั้งหน้าของไทยจะมีผู้มาใช้สิทธิเกิน 75% หรือไม่?": "Will turnout in Thailand's next general election exceed 75%?",
"การแจ้งเตือน": "Notifications",
"การแนะนำนี้จะถูกส่งไปรอตรวจสอบที่หน้าจัดการตลาดของผู้ดูแลระบบ — เป็นข้อมูลที่บันทึกไว้ในเบราว์เซอร์นี้เท่านั้น (ยังไม่ใช่ฐานข้อมูลจริง) ทีมพัฒนาแบ็กเอนด์ของคุณจะเชื่อมขั้นตอนนี้เข้ากับ API จริงในภายหลัง": "This suggestion will be sent to the admin's market management page for review — it is only stored in this browser (not a real database yet). Your backend team will connect this step to a real API later.",
"กำลังเข้าสู่ระบบด้วย Google…": "Signing in with Google…",
"กำไร/ขาดทุน": "P&L",
"กำไร/ขาดทุนจำลองสำหรับการสาธิตเท่านั้น": "Simulated P&L for demo purposes only.",
"กำไรขาดทุน": "P&L",
"กำไรขาดทุนสะสม": "Total P&L",
"กิจกรรม": "Activity",
"กิจกรรมล่าสุด": "Recent activity",
"กีฬา": "Sports",
"ก่อนหน้า": "Previous",
"ของคุณกำไรขึ้น 8% วันนี้": "is up 8% today",
"ของยอดฝากครั้งแรกของเขาเองด้วย": "of their own first deposit too.",
"ของยอดฝากครั้งแรกของเพื่อนที่แนะนำสำเร็จ (สมัคร + เทรดครั้งแรก) และเพื่อนของคุณได้รับโบนัสต้อนรับ": "of the first deposit of each successfully referred friend (sign up + first trade), and your friend gets a welcome bonus of",
"ของเรา (เนื้อหาตัวอย่างสำหรับสาธิตเช่นกัน)": "(also sample content for the demo).",
"ของไทยปี 2026 จะเติบโตเกิน 3% หรือไม่?": "Thailand's GDP grow more than 3% in 2026?",
"ขาย": "Sell",
"ขายครึ่งหนึ่ง": "Sell half",
"ขายทั้งหมด": "Sell all",
"ขึ้น": "Up",
"ข้อกำหนดการใช้งาน": "Terms of Use",
"ข้อกำหนดทางกฎหมาย": "Legal",
"ข้อกำหนดและความเป็นส่วนตัว": "Terms & Privacy",
"ข้อมูลที่จัดเก็บ": "Data we store",
"ค": "C",
"คริปโต": "Crypto",
"ความคิดเห็น (": "Comments (",
"ความน่าจะเป็นฝั่งใช่ตามช่วงเวลา": "Probability of Yes over time",
"ความน่าจะเป็นเริ่มต้น": "Starting probability",
"คัดลอก": "Copy",
"คัดลอกลิงก์แล้ว": "Link copied",
"คัดลอกไม่สำเร็จ ลองคัดลอกด้วยตนเอง": "Couldn't copy — please copy it manually",
"คำขอที่รอการอนุมัติ (": "Pending requests (",
"คำถาม": "Question",
"คำถามที่พบบ่อย": "FAQ",
"คืน $128 หากชนะ": "Get $128 if it wins",
"คืน $163 หากชนะ": "Get $163 if it wins",
"คุณ": "You",
"คุณ)": "You)",
"คุณยังไม่มีโพซิชันฝั่งนี้": "You don't have a position on this side yet",
"คุณสมบัติผู้ใช้งาน": "User eligibility",
"คุณได้รับ": "You earn",
"คุณได้รับเงิน $50.00": "you received $50.00",
"ค่าธรรมเนียม": "Fee",
"ค่าธรรมเนียมแพลตฟอร์ม (ขาย,": "Platform fee (sell,",
"ค่าธรรมเนียมแพลตฟอร์ม (ซื้อ,": "Platform fee (buy,",
"ค้นหาตลาด…": "Search markets…",
"จะเกิดขึ้นภายใน ___ หรือไม่?": "will happen by ___?",
"จำนวนหุ้น": "Shares",
"จำนวนหุ้นที่จะขาย": "Shares to sell",
"จำนวนหุ้นที่จะขาย (ถืออยู่": "Shares to sell (you hold",
"จำนวนหุ้นที่จะได้รับ": "Shares you'll get",
"จำนวนเงิน": "Amount",
"จำนวนเงินที่ต้องการถอน": "Amount to withdraw",
"จำนวนเงินที่ต้องการฝาก": "Amount to deposit",
"จำนวนเงินนี้เกินยอดคงเหลือที่ยังไม่ถูกจองไว้ในคำขอถอนอื่นที่รออนุมัติอยู่": "This amount exceeds your balance not already reserved by other pending withdrawal requests",
"จำนวนเงินเกินยอดคงเหลือที่ใช้ได้ของคุณ": "That amount exceeds your available balance",
"จำลองเพื่อนแนะนำสำเร็จ": "Simulate successful referral",
"จำลองเพื่อนใหม่ (สำหรับสาธิต)": "Simulate a new friend (demo)",
"จำลองเพื่อนใหม่ “": "Simulated new friend “",
"จ่ายผลตอบแทนจากตลาด “": "Payout from market “",
"ฉันสามารถขายก่อนที่ตลาดจะตัดสินผลได้หรือไม่?": "Can I sell before a market resolves?",
"ชนะ": "Won",
"ชม": "hrs",
"ชม ที่แล้ว": "hrs ago",
"ชม.ที่แล้ว": "hrs ago",
"ชวนเพื่อนมาเทรดบน Debatic แล้วรับส่วนแบ่งจากยอดฝากครั้งแรกของเขา": "Invite friends to trade on Debatic and earn a share of their first deposit.",
"ชื่อ": "Name",
"ชื่อ-นามสกุลตามบัญชีธนาคาร": "Full name as shown on the bank account",
"ชื่อของคุณ": "Your name",
"ชื่อที่แสดง": "Display name",
"ชื่อบัญชี": "Account name",
"ชื่อผู้ใช้": "Username",
"ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง ลองใช้ demo / demo1234": "Incorrect username or password. Try demo / demo1234",
"ช่วงเวลา": "Time frame",
"ซื้อ": "Buy",
"ซื้อฝั่ง “ใช่” หรือ “ไม่”": "Buy “Yes” or “No”",
"ซื้อฝั่งใช่": "Buy Yes",
"ซื้อฝั่งไม่": "Buy No",
"ซ่อน −": "Hide −",
"ดัชนี SET จะปิดเหนือ 1,500 จุดก่อนสิ้นปี 2026 หรือไม่?": "Will the SET index close above 1,500 before the end of 2026?",
"ดูคำถามที่พบบ่อยทั้งหมด": "See all FAQs",
"ดูทั้งหมด": "See all",
"ดูในพอร์ตของฉัน →": "View in my portfolio →",
"ด้วยเงิน": "for",
"ต.ค.": "Oct",
"ตลอดเวลา": "All time",
"ตลาด": "Markets",
"ตลาด AFF Championship ตัดสินผลเป็น": "AFF Championship market resolved as",
"ตลาด AFF Championship ตัดสินผลเป็น \"ใช่\" — คุณได้รับเงิน $50.00": "The AFF Championship market resolved as \"Yes\" — you received $50.00",
"ตลาด “": "Market “",
"ตลาดดัชนี SET จะปิดรับในอีก 6 วัน": "The SET index market closes in 6 days",
"ตลาดทั้งหมด": "All markets",
"ตลาดทำนายผลแบบใช่ / ไม่ สำหรับสาธิต — เทรดตามมุมมองของคุณต่อเหตุการณ์ต่าง ๆ": "Demo Yes / No prediction markets — trade on your view of real-world events",
"ตลาดที่ติดแท็ก": "Tagged markets",
"ตลาดนี้ตัดสินผลแล้ว": "This market has resolved",
"ตลาดมีการตัดสินผลอย่างไร?": "How are markets resolved?",
"ตลาดแบบใช่/ไม่เปิดอยู่ · มีแค่ ใช่ / ไม่ เท่านั้น": "open Yes/No markets · Yes / No only",
"ตอบกลับ": "Reply",
"ตัดสินผลตลาด “ทีมชาติไทยผ่านเข้ารอบชิงชนะเลิศ AFF Championship 2026 หรือไม่?” เป็น “ใช่”": "Resolved market “Will Thailand reach the AFF Championship 2026 final?” as “Yes”",
"ตัดสินผลตลาด “บิตคอยน์แตะราคา $200,000 ก่อนเดือนกันยายน 2026 หรือไม่?” เป็น “ไม่”": "Resolved market “Will Bitcoin hit $200,000 before September 2026?” as “No”",
"ตัดสินผลตลาดเป็น “": "resolved the market as “",
"ตัดสินผลตามผลลัพธ์จริงจากแหล่งที่มาที่ระบุไว้": "Resolves according to the actual outcome from the stated source",
"ตัดสินผลแล้ว": "Resolved",
"ตัดสินผลแล้ว — คุณได้รับเงินจ่ายผลตอบแทน": "” has resolved — you received a payout of",
"ตัดสินผลแล้ว — น่าเสียดายที่โพซิชันของคุณในตลาดนี้ไม่ถูกต้อง": "” has resolved — unfortunately your position in this market didn't win.",
"ตัดสินผลแล้ว:": "Resolved:",
"ตัดสินว่า": "Resolves",
"ตัดสินว่า \"ใช่\" หาก FOMC ปรับลดอัตราดอกเบี้ยเป้าหมายในการประชุมเดือนธันวาคม 2026": "Resolves “Yes” if the FOMC lowers its target rate at the December 2026 meeting.",
"ตัดสินว่า \"ใช่\" หากกรมอุตุนิยมวิทยาออกประกาศเตือนพายุที่มีชื่อซึ่งส่งผลกระทบโดยตรงต่อกรุงเทพฯ ในเดือนตุลาคม 2026": "Resolves “Yes” if the Thai Meteorological Department issues a named-storm warning directly affecting Bangkok in October 2026.",
"ตัดสินว่า \"ใช่\" หากดัชนี SET ปิดเหนือ 1,500.00 จุดในวันซื้อขายใดวันหนึ่งของปี 2026": "Resolves “Yes” if the SET index closes above 1,500.00 on any trading day in 2026.",
"ตัดสินว่า \"ใช่\" หากตัวเลขประมาณการ GDP ทั้งปี 2026 ของ สศช. (รายงานฉบับแรก) สูงกว่า 3.0%": "Resolves “Yes” if NESDC's full-year 2026 GDP estimate (first release) is above 3.0%.",
"ตัดสินว่า \"ใช่\" หากตัวเลขผู้มาใช้สิทธิอย่างเป็นทางการจาก กกต. ในการเลือกตั้งทั่วไปครั้งถัดไปสูงกว่า 75%": "Resolves “Yes” if official turnout from the Election Commission in the next general election is above 75%.",
"ตัดสินว่า \"ใช่\" หากภาพยนตร์ที่กำกับหรือผลิตโดยคนไทยได้รับรางวัลสายประกวดหลักจากเทศกาลภาพยนตร์เมืองคานส์ 2027": "Resolves “Yes” if a film directed or produced by a Thai filmmaker wins a main competition award at the 2027 Cannes Film Festival.",
"ตัดสินว่า \"ใช่\" หากมีนายกรัฐมนตรีคนใหม่เข้ารับตำแหน่งก่อนเวลา 00:00 น. ตามเวลาไทย วันที่ 1 มกราคม 2027 โดยอ้างอิงจากราชกิจจานุเบกษา หากไม่เป็นไปตามนี้ให้ตัดสินว่า \"ไม่\"": "Resolves “Yes” if a new Prime Minister takes office before 00:00 Thai time on 1 January 2027, per the Royal Gazette. Otherwise it resolves “No”.",
"ตัดสินว่า \"ใช่\" หากมูลค่าตลาดรวมของ ETH สูงกว่า BTC ในวันใดวันหนึ่งก่อนวันที่ 1 มกราคม 2028": "Resolves “Yes” if ETH's total market cap is above BTC's on any day before 1 January 2028.",
"ตัดสินว่า \"ใช่\" หากราคาปิดรายวันของ BTC/USD บน Coinbase สูงกว่า $150,000 ในวันใดวันหนึ่งก่อนวันที่ 1 มกราคม 2027": "Resolves “Yes” if the BTC/USD daily close on Coinbase is above $150,000 on any day before 1 January 2027.",
"ตัดสินว่า \"ใช่\" หากแมนเชสเตอร์ ซิตี จบฤดูกาลด้วยอันดับ 1 ของตารางพรีเมียร์ลีก 2026/27": "Resolves “Yes” if Manchester City finish 1st in the 2026/27 Premier League table.",
"ตัดสินแล้ว": "Resolved",
"ตัวอย่าง — อัปโหลดได้ที่หน้าจัดการระบบ": "Sample — upload from the admin console",
"ตัวอย่างโฆษณา 1": "Sample ad 1",
"ตัวอย่างโฆษณา 2": "Sample ad 2",
"ตั้งค่า": "Settings",
"ตั้งค่าบัญชี": "Account settings",
"ตามที่แสดงในหน้านี้เป็นเพียงต้นแบบที่ไม่มีการทำงานจริง ไม่มีการใช้เงินจริง บัญชีจริง หรือการเดิมพันจริงแต่อย่างใด": "shown on this page is only a non-functional prototype. No real money, real accounts or real betting are involved.",
"ติดแท็กตลาดนี้": "Tag this market",
"ต่ำกว่า": "Lower",
"ต้นทุน": "Cost",
"ต้นแบบนี้ไม่มีการจัดเก็บข้อมูลใด ๆ — กิจกรรมทั้งหมดจะอยู่ในหน่วยความจำของเบราว์เซอร์สำหรับหน้าปัจจุบันเท่านั้น": "This prototype stores no data — all activity stays in the browser's memory for the current page only.",
"ต้องการขายกี่หุ้นจากทั้งหมด": "How many shares do you want to sell, out of",
"ต้องเข้าสู่ระบบก่อนจึงจะดูกระเป๋าเงินของคุณได้": "You need to log in to see your wallet.",
"ต้องเข้าสู่ระบบก่อนจึงจะดูการแจ้งเตือนได้": "You need to log in to see notifications.",
"ต้องเข้าสู่ระบบก่อนจึงจะดูพอร์ตของคุณได้": "You need to log in to see your portfolio.",
"ต้องเข้าสู่ระบบก่อนจึงจะดูหน้าแนะนำเพื่อนได้": "You need to log in to see the referral page.",
"ต้องเข้าสู่ระบบก่อนจึงจะดูโปรไฟล์ของคุณได้": "You need to log in to see your profile.",
"ต้องเข้าสู่ระบบก่อนจึงจะเปิดดูกระทู้นี้ได้": "You need to log in before viewing this market.",
"ต้องเข้าสู่ระบบก่อนจึงจะแก้ไขการตั้งค่าได้": "You need to log in to edit settings.",
"ต้องเข้าสู่ระบบก่อนจึงจะแนะนำกระทู้ใหม่ได้": "You need to log in before suggesting a new market.",
"ถอน": "Withdraw",
"ถอนเงิน": "Withdraw",
"ถัดไป": "Next",
"ถืออยู่": "holding",
"ถูกใจ": "Like",
"ทั้งหมด": "All",
"ทำงานอย่างไร": "How it works",
"ทำไมราคาถึงเปลี่ยนแปลง?": "Why do prices change?",
"ทีมชาติไทยผ่านเข้ารอบชิงชนะเลิศ AFF Championship 2026 หรือไม่?": "Will Thailand reach the AFF Championship 2026 final?",
"ที่แล้ว": "ago",
"ทุกกระทู้เป็นคำถามแบบ ใช่ / ไม่ เท่านั้น ดูโอกาสปัจจุบันได้จากเปอร์เซ็นต์บนการ์ด": "Every market is a Yes / No question. See the current probability from the percentage on each card.",
"ทุกการเทรดจะส่งผลให้ราคาขยับเล็กน้อย การซื้อฝั่ง Yes จะดันราคา Yes ให้สูงขึ้น (และราคา No ลดลง) ส่วนการซื้อฝั่ง No จะเป็นไปในทิศทางตรงกันข้าม ในเดโมนี้เป็นเพียงการจำลองผลกระทบแบบง่าย ๆ แต่ในตลาดจริงราคาจะเปลี่ยนแปลงตามคำสั่งซื้อขายจริงของผู้ใช้": "Every trade moves the price slightly. Buying Yes pushes the Yes price up (and the No price down), while buying No does the opposite. This demo uses a simple simulated impact, but in a real market prices move with users' actual orders.",
"ธ.ค.": "Dec",
"ธนาคาร": "Bank",
"ธนาคารกรุงศรีอยุธยา": "Bank of Ayudhya (Krungsri)",
"ธนาคารกรุงเทพ": "Bangkok Bank",
"ธนาคารกรุงไทย": "Krungthai Bank",
"ธนาคารกสิกรไทย": "Kasikornbank",
"ธนาคารซีไอเอ็มบี ไทย": "CIMB Thai Bank",
"ธนาคารทหารไทยธนชาต (ttb)": "TMBThanachart Bank (ttb)",
"ธนาคารยูโอบี": "UOB",
"ธนาคารออมสิน": "Government Savings Bank",
"ธนาคารอาคารสงเคราะห์ (ธอส.)": "Government Housing Bank (GH Bank)",
"ธนาคารเกียรตินาคินภัทร": "Kiatnakin Phatra Bank",
"ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (ธ.ก.ส.)": "Bank for Agriculture and Agricultural Cooperatives (BAAC)",
"ธนาคารไทยพาณิชย์": "Siam Commercial Bank",
"นาทีที่แล้ว": "minutes ago",
"นายกรัฐมนตรีคนใหม่ของไทยจะได้รับการแต่งตั้งก่อนเดือนมกราคม 2027 หรือไม่?": "Will Thailand appoint a new Prime Minister before January 2027?",
"นายกฯ คนใหม่จะได้รับการแต่งตั้งก่อน ม.ค. 2027 หรือไม่?": "Will a new PM be appointed before Jan 2027?",
"นี่คือระบบทดลอง — การสมัครจะพาคุณเข้าสู่บัญชีทดลองเดียวกัน": "This is a demo — signing up takes you into the same demo account.",
"นี่คือเงินจริงหรือไม่?": "Is this real money?",
"นโยบายความเป็นส่วนตัว": "Privacy Policy",
"น้อยกว่า": "Under",
"บัญชีทดลอง:": "Demo account:",
"บัญชีธนาคาร (สำหรับถอนเงิน)": "Bank account (for withdrawals)",
"บันทึกการตั้งค่าแล้ว": "Settings saved",
"บันทึกการเปลี่ยนแปลง": "Save changes",
"บันทึกข้อมูลบัญชีธนาคาร": "Save bank details",
"บันทึกข้อมูลบัญชีธนาคารแล้ว": "Bank account details saved",
"บิตคอยน์จะปิดที่ราคาสูงกว่า $150,000 ก่อนปี 2027 หรือไม่?": "Will Bitcoin close above $150,000 before 2027?",
"บิตคอยน์แตะราคา $200,000 ก่อนเดือนกันยายน 2026 หรือไม่?": "Will Bitcoin hit $200,000 before September 2026?",
"บุคคลภายนอก": "Third parties",
"ประวัติ": "History",
"ประวัติการทำธุรกรรม": "Transaction history",
"ประเภท": "Type",
"ปรับค่าธรรมเนียมแพลตฟอร์มจาก 1.5% เป็น 2%": "Changed the platform fee from 1.5% to 2%",
"ปริมาณ": "Volume",
"ปริมาณการเทรด": "Trading volume",
"ปริมาณการเทรดตลาด": "Trading volume on the market",
"ปริมาณการเทรดตลาด \"อีเธอเรียมแซงบิตคอยน์\" พุ่งขึ้น 40% ในวันที่ผ่านมา": "Trading volume on \"ETH overtakes BTC\" jumped 40% in the past day",
"ปิด": "Close",
"ปิดรับ": "Closes",
"ปุ่มนี้จำลองการเข้าสู่ระบบด้วย Google สำหรับสาธิตเท่านั้น ยังไม่ได้เชื่อมต่อ Google OAuth จริง": "This button simulates Google sign-in for demo purposes only; real Google OAuth isn't connected yet.",
"ผล: ใช่": "Result: Yes",
"ผลการค้นหา “": "Search results for “",
"ผลตอบแทนหากฝั่ง “": "Payout if “",
"ผลลัพธ์": "Outcome",
"ผลสรุป:": "Outcome:",
"ผู้ถือ": "holders",
"ผู้ถือรายใหญ่": "Top holders",
"ผู้เทรด": "Traders",
"ผ่านเงื่อนไขแล้ว": "Qualified",
"ฝั่ง": "Side",
"ฝั่ง “": "side “",
"ฝาก": "Deposit",
"ฝากเงิน": "Deposit",
"ฝ่ายสนับสนุน": "Support",
"ฝ่ายสนับสนุนและโซเชียล": "Support & social",
"พ.ค.": "May",
"พ.ค. 2026": "May 2026",
"พ.ย.": "Nov",
"พอร์ต": "Portfolio",
"พอร์ตของฉัน": "My portfolio",
"พอร์ตของฉัน — มูลค่าปัจจุบันของโพซิชันที่เปิดอยู่": "My portfolio — current value of your open positions",
"พื้นที่โฆษณาของคุณ": "Your ad here",
"พุ่งขึ้น 40% ในวันที่ผ่านมา": "jumped 40% in the past day",
"ฟีดกิจกรรมสดจากทุกตลาด": "Live activity feed from every market",
"ภาพยนตร์ไทยจะได้รับรางวัลใหญ่จากเทศกาลคานส์ 2027 หรือไม่?": "Will a Thai film win a major award at Cannes 2027?",
"ม.ค.": "Jan",
"ม.ค. 2026": "Jan 2026",
"มากกว่า": "Over",
"มาแรง": "Hot",
"มิ.ย.": "Jun",
"มิ.ย. 2026": "Jun 2026",
"มี.ค.": "Mar",
"มี.ค. 2026": "Mar 2026",
"มีตลาดใหม่ในหมวดวัฒนธรรม: เทศกาลคานส์ 2027": "New market in Culture: Cannes 2027",
"มูลค่า": "Value",
"ยกเลิก": "Cancel",
"ยกเลิกคำขอ": "Cancel request",
"ยกเลิกคำขอแล้ว": "Request cancelled",
"ยอดคงเหลือ": "Balance",
"ยอดคงเหลือที่ใช้ได้": "Available balance",
"ยอดฝากครั้งแรก": "First deposit",
"ยอดฝากครั้งแรกของเพื่อน ($)": "Friend's first deposit ($)",
"ยังไม่มีการแจ้งเตือน": "No notifications yet",
"ยังไม่มีกิจกรรม": "No activity yet",
"ยังไม่มีกิจกรรมสาธารณะ": "No public activity yet",
"ยังไม่มีความคิดเห็น": "No comments yet",
"ยังไม่มีตลาดที่ติดแท็ก": "No tagged markets yet",
"ยังไม่มีโพซิชันที่ปิดแล้ว": "No closed positions yet",
"ยังไม่มีโพซิชันที่เปิดอยู่": "No open positions yet",
"ยืนยันการขาย": "Confirm sale",
"รหัสตลาดนี้ไม่มีอยู่ในระบบทดลองนี้": "This market ID doesn't exist in this demo.",
"รหัสผ่าน": "Password",
"รอผลตัดสิน": "Wait for the result",
"รอเทรดครั้งแรก": "Awaiting first trade",
"ระงับบัญชีผู้เล่น SomChaiBets เนื่องจากพบความเคลื่อนไหวที่น่าสงสัย": "Suspended player SomChaiBets due to suspicious activity",
"ระบบทดลองนี้มีบัญชีเดียว จึงยังไม่สามารถให้เพื่อนจริงสมัครผ่านลิงก์นี้ได้ — รายชื่อและปุ่ม “จำลองเพื่อนใหม่” ด้านล่างเป็นข้อมูลจำลองเพื่อสาธิตกลไกการคำนวณรางวัลเท่านั้น (ปรับเปอร์เซ็นต์ได้จากหน้าตั้งค่าระบบฝั่งแอดมิน) ทีมพัฒนาฝั่งหลังบ้านของคุณจะเชื่อมกับระบบสมัครสมาชิกจริงภายหลัง": "This demo has only one account, so real friends can't sign up through this link yet — the list and the “Simulate new friend” button below are mock data to demonstrate how rewards are calculated (the percentages can be adjusted in the admin settings). Your backend team will connect this to the real sign-up system later.",
"รับเงินอัตโนมัติ": "Get paid automatically",
"ราคาต่อหุ้น (เริ่มต้น)": "Price per share (start)",
"ราคาต่อหุ้นสะท้อนโอกาสที่ตลาดให้ไว้ในตอนนั้น — ยิ่งคุณคิดถูก ยิ่งได้ผลตอบแทนดีขึ้น": "The share price reflects the probability the market gives at that moment — the more right you are, the better your return.",
"ราคาปัจจุบัน": "Current price",
"ราคาเฉลี่ย": "Avg. price",
"รางวัลที่คุณได้รับ": "Your reward",
"รางวัลรวมที่ได้รับ": "Total rewards earned",
"รายชื่อผู้ถือจำลองสำหรับการสาธิตเท่านั้น (ยกเว้นแถวของคุณซึ่งเป็นข้อมูลจริง)": "Mock holder list for demo purposes only (except your own row, which is real).",
"รายชื่อเพื่อนที่แนะนำ": "Referred friends",
"รายละเอียดตลาด": "Market details",
"รายวัน": "Daily",
"รายสัปดาห์": "Weekly",
"รายเดือน": "Monthly",
"รูปโปรไฟล์": "Profile photo",
"ลง": "Down",
"ลองเปลี่ยนหมวดหมู่หรือล้างคำค้นหา": "Try a different category or clear your search",
"ลิงก์นี้ไม่ตรงกับหน้าใดในเดโมนี้": "This link doesn't match any page in this demo.",
"ลิงก์แนะนำของคุณ": "Your referral link",
"ลีดเดอร์บอร์ด": "Leaderboard",
"ล่าสุด": "last",
"ว": "C",
"วัฒนธรรม": "Culture",
"วันที่ตัดสินผล": "Resolution date",
"วันที่สมัคร": "Signed up",
"วันที่แล้ว": "days ago",
"วันนี้": "Today",
"วิธีการเล่น": "How to play",
"ศ": "E",
"ส.ค.": "Aug",
"สถานะ": "Status",
"สภาพอากาศ": "Weather",
"สมัคร ฝากเงิน": "signed up, deposited",
"สมัครสมาชิก": "Sign up",
"สมุดคำสั่ง": "Order book",
"สมุดคำสั่งจำลองสำหรับการสาธิตเท่านั้น — นักพัฒนาฝั่งเซิร์ฟเวอร์ของคุณจะเชื่อมส่วนนี้เข้ากับระบบจับคู่คำสั่งจริงหรือ AMM": "Simulated order book for demo purposes only — your server-side developer will connect this to a real matching engine or AMM.",
"สร้างตลาดใหม่": "Created a new market",
"สร้างตลาดใหม่: “ดัชนี SET จะปิดเหนือ 1,500 จุดก่อนสิ้นปี 2026 หรือไม่?”": "Created new market: “Will the SET index close above 1,500 before the end of 2026?”",
"สร้างบัญชี": "Create account",
"สร้างโดย": "Created by",
"สลับโหมดมืด/สว่าง": "Toggle dark/light mode",
"สัปดาห์นี้": "This week",
"สำเร็จ ได้รับ": "— received",
"สูงกว่า": "Higher",
"สูงสุด": "Max",
"สไลด์": "Slide",
"ส่งคำขอถอนเงิน": "Withdrawal request of",
"ส่งคำขอฝากเงิน": "Deposit request of",
"ส่งคำแนะนำ": "Submit suggestion",
"ส่งคำแนะนำกระทู้เรียบร้อยแล้ว รอผู้ดูแลระบบตรวจสอบ": "Market suggestion submitted — waiting for admin review",
"หน้านี้เป็นเนื้อหาชั่วคราวสำหรับใช้สาธิตเท่านั้น — โปรดเปลี่ยนเป็นข้อความทางกฎหมายจริงก่อนนำไปใช้งานจริง": "This page is placeholder content for demo purposes only — replace it with real legal text before going live.",
"หมวดหมู่": "Category",
"หมายเหตุ": "Note",
"หรือ": "or",
"หัวข้อฮิต": "Trending",
"หาก FOMC ปรับลดอัตราดอกเบี้ยเป้าหมายในการประชุมเดือนธันวาคม 2026": "if the FOMC lowers its target rate at the December 2026 meeting",
"หากกรมอุตุนิยมวิทยาออกประกาศเตือนพายุที่มีชื่อซึ่งส่งผลกระทบโดยตรงต่อกรุงเทพฯ ในเดือนตุลาคม 2026": "if the Thai Meteorological Department issues a named-storm warning directly affecting Bangkok in October 2026",
"หากดัชนี SET ปิดเหนือ 1,500.00 จุดในวันซื้อขายใดวันหนึ่งของปี 2026": "if the SET index closes above 1,500.00 on any trading day in 2026",
"หากตัวเลขประมาณการ GDP ทั้งปี 2026 ของ สศช. (รายงานฉบับแรก) สูงกว่า 3.0%": "if NESDC's full-year 2026 GDP estimate (first release) is above 3.0%",
"หากตัวเลขผู้มาใช้สิทธิอย่างเป็นทางการจาก กกต. ในการเลือกตั้งทั่วไปครั้งถัดไปสูงกว่า 75%": "if official turnout from the Election Commission in the next general election is above 75%",
"หากภาพยนตร์ที่กำกับหรือผลิตโดยคนไทยได้รับรางวัลสายประกวดหลักจากเทศกาลภาพยนตร์เมืองคานส์ 2027": "if a film directed or produced by a Thai filmmaker wins a main competition award at the 2027 Cannes Film Festival",
"หากมีนายกรัฐมนตรีคนใหม่เข้ารับตำแหน่งก่อนเวลา 00:00 น. ตามเวลาไทย วันที่ 1 มกราคม 2027 โดยอ้างอิงจากราชกิจจานุเบกษา หากไม่เป็นไปตามนี้ให้ตัดสินว่า": "if a new Prime Minister takes office before 00:00 Thai time on 1 January 2027, per the Royal Gazette. Otherwise it resolves",
"หากมูลค่าตลาดรวมของ ETH สูงกว่า BTC ในวันใดวันหนึ่งก่อนวันที่ 1 มกราคม 2028": "if ETH's total market cap is above BTC's on any day before 1 January 2028",
"หากราคาปิดรายวันของ BTC/USD บน Coinbase สูงกว่า $150,000 ในวันใดวันหนึ่งก่อนวันที่ 1 มกราคม 2027": "if the BTC/USD daily close on Coinbase is above $150,000 on any day before 1 January 2027",
"หากแมนเชสเตอร์ ซิตี จบฤดูกาลด้วยอันดับ 1 ของตารางพรีเมียร์ลีก 2026/27": "if Manchester City finish 1st in the 2026/27 Premier League table",
"หุ้น": "shares",
"หุ้น Yes หรือ No หมายความว่าอย่างไรกันแน่?": "What exactly do Yes and No shares mean?",
"หุ้น)": "shares)",
"หุ้น?": "shares?",
"หุ้นฝั่ง": "shares of",
"หุ้นฝั่งที่ชนะจะจ่ายหุ้นละ $1.00 เข้ายอดคงเหลือของคุณทันที": "Winning shares pay $1.00 each straight into your balance.",
"หุ้นฝั่งที่ชนะจ่ายหุ้นละ $1.00 การซื้อขายในตลาดนี้ปิดแล้ว": "Winning shares pay $1.00 each. Trading in this market is closed.",
"ฬ": "S",
"อ": "W",
"อธิบายให้ชัดเจนว่ากระทู้นี้จะตัดสินผลอย่างไรและเมื่อใด พร้อมระบุแหล่งอ้างอิง": "Explain clearly how and when this market will resolve, and include a source.",
"ออกจากระบบ": "Log out",
"อัตราชนะ": "Win rate",
"อันดับ": "Ranks",
"อันดับผู้เทรด": "Top traders",
"อัปเดตรูปโปรไฟล์แล้ว": "Profile photo updated",
"อัปโหลดรูปใหม่": "Upload new photo",
"อินเทอร์เฟซนี้จัดทำขึ้นเพื่อการประเมินผลเท่านั้น และอาจมีการเปลี่ยนแปลงได้ตลอดเวลาโดยไม่ต้องแจ้งให้ทราบล่วงหน้า": "This interface is provided for evaluation only and may change at any time without notice.",
"อีเธอเรียมจะมีมูลค่าตลาดแซงหน้าบิตคอยน์ก่อนปี 2028 หรือไม่?": "Will Ethereum's market cap overtake Bitcoin's before 2028?",
"อีเธอเรียมแซงบิตคอยน์": "ETH overtakes BTC",
"อีเมล": "Email",
"เข้าร่วมเมื่อ": "Joined",
"เข้าสู่ระบบ": "Log in",
"เข้าสู่ระบบด้วย Google": "Continue with Google",
"เงินทดลอง — ไม่ใช่เงินจริง": "Demo money — not real money",
"เงินทดลองที่ได้รับตอนเปิดบัญชี": "Demo funds credited when the account was opened",
"เงินที่จะได้รับ": "You'll receive",
"เงินที่ได้รับ": "Payout",
"เฉลี่ย": "Avg",
"เช่น 200": "e.g. 200",
"เดโมนี้มีเพียงบัญชีเดียว จึงไม่สามารถเปลี่ยนอีเมลได้ที่นี่ และการเปลี่ยนแปลงชื่อ/ชื่อผู้ใช้จะรีเซ็ตเมื่อโหลดหน้าใหม่ — รูปโปรไฟล์และข้อมูลบัญชีธนาคารจะถูกบันทึกไว้ในเบราว์เซอร์นี้": "This demo has only one account, so the email can't be changed here, and name/username changes reset on reload — your profile photo and bank details are saved in this browser.",
"เทรดเดอร์ทุกคนสามารถเสนอสร้างตลาดแบบ Yes/No ได้ โดยกำหนดคำถาม กติกาการตัดสิน และวันปิดตลาด นอกจากนี้เจ้าของแพลตฟอร์มยังสามารถสร้างและตัดสินผลตลาดได้จากหน้าคอนโซลผู้ดูแลระบบ": "Any trader can propose a Yes/No market by setting the question, resolution rules and closing date. The platform owner can also create and resolve markets from the admin console.",
"เนื้อหาตัวอย่าง": "Sample content",
"เปลี่ยนกลับเป็นตัวอักษรเริ่มต้นแล้ว": "Switched back to the default letter",
"เปิดอยู่": "Open",
"เป็นคนแรกที่เทรดตลาดนี้": "Be the first to trade this market.",
"เป็นคนแรกที่แสดงความคิดเห็นในตลาดนี้": "Be the first to comment on this market.",
"เป็นระบบสาธิต (demo) ที่จัดทำขึ้นเพื่อทดลองและนำเสนอแนวคิดตลาดทำนายผลแบบใช่/ไม่เท่านั้น ไม่ใช่แพลตฟอร์มการเทรดจริง ไม่มีการใช้เงินจริง และไม่ได้อยู่ภายใต้การกำกับดูแลของหน่วยงานใด ยอดคงเหลือ ราคาตลาด และธุรกรรมทั้งหมดที่แสดงเป็นเพียงข้อมูลจำลองเพื่อการนำเสนอ เมื่อพัฒนาต่อเป็นระบบใช้งานจริง ทีมพัฒนาจะระบุนิติบุคคล เขตอำนาจศาล และหน่วยงานกำกับดูแลที่เกี่ยวข้องไว้ในส่วนนี้ อ่าน": "is a demo system built only to test and present the idea of a Yes/No prediction market. It is not a real trading platform, uses no real money, and is not overseen by any regulator. All balances, market prices and transactions shown are simulated data for presentation. When developed into a live system, the team will state the legal entity, jurisdiction and relevant regulators in this section. Read our",
"เป็นเงินทดลองเท่านั้น การเทรดถือว่าคุณยอมรับ": "Demo money only. By trading you agree to the ",
"เพิ่มความคิดเห็น...": "Add a comment...",
"เพื่อนที่แนะนำสำเร็จ": "Successful referrals",
"เฟดจะปรับลดอัตราดอกเบี้ยอีกครั้งในเดือนธันวาคม 2026 หรือไม่?": "Will the Fed cut interest rates again in December 2026?",
"เฟดปรับลดดอกเบี้ย": "Fed rate cut",
"เม.ย.": "Apr",
"เม.ย. 2026": "Apr 2026",
"เมนู": "Menu",
"เมื่อสักครู่": "just now",
"เมื่อเหตุการณ์จริงเกิดขึ้น ผู้ดูแลระบบจะตัดสินกระทู้เป็น “ใช่” หรือ “ไม่” ตามกติกาที่ระบุไว้": "When the real event happens, an admin resolves the market as “Yes” or “No” according to its stated rules.",
"เมื่อไหร่": "When",
"เริ่มเทรดเลย": "Start trading",
"เลขที่บัญชี": "Account number",
"เลือกกระทู้ที่สนใจ": "Pick a market you're interested in",
"เลือกธนาคาร": "Select a bank",
"เวอร์ชันที่ใช้งานจริงจะต้องระบุเขตอำนาจศาลที่มีสิทธิ์ใช้งานและข้อกำหนดด้านอายุไว้ในส่วนนี้": "The production version must state eligible jurisdictions and age requirements in this section.",
"เวอร์ชันที่ใช้งานจริงจะเปิดเผยผู้ให้บริการด้านการวิเคราะห์ข้อมูล การชำระเงิน หรือการยืนยันตัวตนไว้ในส่วนนี้": "The production version will disclose analytics, payment or identity-verification providers in this section.",
"เศรษฐกิจ": "Economy",
"เอาออกจากตลาดที่ติดแท็ก": "Remove from tagged markets",
"แก้ไขโปรไฟล์": "Edit profile",
"แจ้งเตือนการตัดสินผลตลาด": "Market resolution alerts",
"แจ้งเตือนการเปลี่ยนแปลงราคา": "Price change alerts",
"แต่ละตลาดจะจ่าย 1.00 ดอลลาร์ต่อหุ้น หากผลลัพธ์ออกมาตรงกับที่คุณคาดการณ์ไว้ และจ่าย 0.00 ดอลลาร์หากไม่ตรง ราคาที่คุณจ่ายต่อหุ้น — เช่น 62¢ สำหรับฝั่ง Yes — สะท้อนถึงโอกาสที่ตลาดประเมินไว้ในขณะนั้น ดังนั้นราคาของฝั่ง Yes และ No จะรวมกันได้ 1.00 ดอลลาร์เสมอ": "Each market pays $1.00 per share if the outcome matches your prediction, and $0.00 if it doesn't. The price you pay per share — e.g. 62¢ for Yes — reflects the probability the market assigns at that moment, so the Yes and No prices always add up to $1.00.",
"แต่ละตลาดจะระบุกติกาการตัดสินและวันปิดตลาดไว้อย่างชัดเจน เมื่อทราบผลลัพธ์ที่เกิดขึ้นจริงแล้ว เจ้าของแพลตฟอร์มจะทำการระบุผลเป็น Yes หรือ No ผ่านหน้าคอนโซลผู้ดูแลระบบ และหุ้นทุกหุ้นในฝั่งที่ชนะจะได้รับเงิน 1.00 ดอลลาร์ต่อหุ้น": "Each market clearly states its resolution rules and closing date. Once the real-world outcome is known, the platform owner sets the result to Yes or No from the admin console, and every share on the winning side receives $1.00.",
"แนะนำ": "Featured",
"แนะนำกระทู้ใหม่": "Suggest a new market",
"แนะนำเพื่อน & รางวัล": "Refer a friend & rewards",
"แพ้": "Lost",
"แมนเชสเตอร์ ซิตี จะคว้าแชมป์พรีเมียร์ลีก ฤดูกาล 2026/27 หรือไม่?": "Will Manchester City win the 2026/27 Premier League?",
"และ": "and",
"และเทรดครั้งแรกแล้ว": "and made their first trade",
"แล้ว": "",
"แล้ว — รอการอนุมัติจากผู้ดูแลระดับสูงขึ้นไป": "submitted — awaiting approval from a senior admin",
"แสดง +": "Show +",
"โปรโมทที่นี่": "Promote here",
"โปรไฟล์": "Profile",
"โพซิชัน": "Position",
"โพซิชัน \"เฟดปรับลดดอกเบี้ย\" ของคุณกำไรขึ้น 8% วันนี้": "Your \"Fed rate cut\" position is up 8% today",
"โพซิชันจะย้ายมาที่นี่เมื่อตลาดตัดสินผลแล้ว": "Positions move here once their market resolves.",
"โพซิชันที่เปิดอยู่": "Open positions",
"โพสต์": "Post",
"โพสิชันที่เปิดอยู่": "Open positions",
"โหมดมืด": "Dark mode",
"โอกาส": "chance",
"โอกาสที่จะเป็น": "chance of",
"โอกาสที่จะเป็น “ใช่”": "chance of “Yes”",
"ใครสามารถสร้างตลาดได้บ้าง?": "Who can create markets?",
"ใช่": "Yes",
"ใช่ /": "Yes /",
"ใช่ / 50% ไม่": "Yes / 50% No",
"ใช่ 57¢": "Yes 57¢",
"ใช่ ·": "Yes ·",
"ใช้ตัวอักษรเริ่มต้น": "Use default letter",
"ใช้สำหรับสาธิตเท่านั้น — ยังไม่เชื่อมกับระบบถอนเงินจริง ทีมพัฒนาฝั่งหลังบ้านของคุณจะเชื่อมส่วนนี้เข้ากับระบบชำระเงินจริงภายหลัง": "For demo only — not connected to a real withdrawal system yet. Your backend team will connect this to a real payment system later.",
"ใช้เพื่อการสาธิตเท่านั้น": "For demo use only",
"ในตลาด “": "in market “",
"ในตอนนี้": "right now",
"ได้ — คุณสามารถเข้าไปที่พอร์ตของคุณเพื่อขายโพซิชันบางส่วนหรือทั้งหมดได้ตามราคาปัจจุบัน ไม่ว่าจะช่วงเวลาใดก็ตามก่อนที่ตลาดจะตัดสินผล": "Yes — you can go to your portfolio to sell some or all of a position at the current price, at any time before the market resolves.",
"ไปที่หน้าตลาดเพื่อเริ่มเทรดครั้งแรกของคุณ": "Head to the markets page to make your first trade.",
"ไม่": "No",
"ไม่ 43¢": "No 43¢",
"ไม่ ·": "No ·",
"ไม่พบตลาดที่ตรงกับตัวกรองของคุณ": "No markets match your filters",
"ไม่พบตลาดนี้": "Market not found",
"ไม่พบหน้านี้": "Page not found",
"ไม่พบโปรไฟล์": "Profile not found",
"ไม่มีการรับประกัน": "No warranty",
"ไม่มีผู้เทรดที่ใช้ชื่อนี้ในระบบทดลองนี้": "No trader with this name exists in this demo.",
"ไม่ใช่ ทุกอย่างบนเว็บไซต์นี้ — ไม่ว่าจะเป็นยอดคงเหลือ การฝากเงิน หรือการเทรด — ถูกเก็บไว้ในหน่วยความจำของหน้าที่คุณเปิดอยู่เท่านั้น และจะรีเซ็ตทุกครั้งที่คุณโหลดหน้าใหม่หรือย้ายไปหน้าอื่น": "No. Everything on this site — balances, deposits and trades — is kept only in the memory of the page you have open, and resets whenever you reload or move to another page."
};

(function(){
  if(typeof currentLang!=='function' || currentLang()!=='en') return;
  const DICT = Object.assign({}, I18N_EN);
  try{
    loadMarkets().forEach(m=>{
      if(m.questionEn && m.question) DICT[m.question.trim()] = m.questionEn.trim();
      if(m.rulesEn && m.rules) DICT[m.rules.trim()] = m.rulesEn.trim();
    });
  }catch(e){}
  const TH = /[\u0E00-\u0E7F]/;
  const RUN = /[\u0E00-\u0E7F]+(?:\.?[ \u00A0]?[\u0E00-\u0E7F]+)*\.?/g;
  const LONG = Object.keys(DICT).filter(k=>k.length>=6).sort((a,b)=>b.length-a.length);
  const missing = window.__i18nMissing = new Set();
  const cache = new Map();

  // Adds a space where an English word would otherwise touch a neighbouring word/number
  // (Thai doesn't put spaces between words, so the source often has none).
  function glue(str, start, end, v){
    if(v==='') return v;
    const prev = str[start-1], next = str[end];
    if(prev && /[0-9A-Za-z¢%)]/.test(prev) && /^[A-Za-z(“]/.test(v)) v = ' '+v;
    if(next && /[0-9A-Za-z$(“]/.test(next) && /[A-Za-z0-9.)”:]$/.test(v)) v = v+' ';
    return v;
  }
  function replaceAllGlue(str, key, val){
    let out = '', i = 0, j;
    while((j = str.indexOf(key, i)) !== -1){ out += str.slice(i, j) + glue(str, j, j+key.length, val); i = j + key.length; }
    return out + str.slice(i);
  }
  function tr(s){
    if(!TH.test(s)) return s;
    if(cache.has(s)) return cache.get(s);
    const t = s.trim();
    let out;
    if(Object.prototype.hasOwnProperty.call(DICT, t)) out = s.replace(t, DICT[t]);
    else {
      out = s;
      for(const k of LONG){
        if(out.indexOf(k) !== -1){ out = replaceAllGlue(out, k, DICT[k]); if(!TH.test(out)) break; }
      }
      if(TH.test(out)){
        out = out.replace(RUN, (run, idx, str)=>{
          const key = run.replace(/\u00A0/g,' ');
          const k2 = Object.prototype.hasOwnProperty.call(DICT, key) ? key
                   : (key.endsWith('.') && Object.prototype.hasOwnProperty.call(DICT, key.slice(0,-1)) ? key.slice(0,-1) : null);
          if(k2===null){ missing.add(run); return run; }
          return glue(str, idx, idx+run.length, DICT[k2]) + (k2!==key ? '.' : '');
        });
      }
      out = out.replace(/  +/g, ' ');
    }
    cache.set(s, out);
    return out;
  }
  window.i18nTranslate = tr;

  const ATTRS = ['placeholder','title','aria-label','alt'];
  const SKIP = 'script,style,textarea,[data-no-i18n],.comment-text';
  function skipped(el){ return !!(el && el.closest && el.closest(SKIP)); }
  function doText(n){
    const v = n.nodeValue;
    if(!v || !TH.test(v) || skipped(n.parentElement)) return;
    const t = tr(v);
    if(t !== v) n.nodeValue = t;
  }
  function doAttrs(el){
    for(const a of ATTRS){
      const v = el.getAttribute && el.getAttribute(a);
      if(v && TH.test(v)){ const t = tr(v); if(t !== v) el.setAttribute(a, t); }
    }
  }
  function walk(root){
    if(root.nodeType === 3){ doText(root); return; }
    if(root.nodeType !== 1 || skipped(root)) return;
    doAttrs(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT, {
      acceptNode(n){ return (n.nodeType===1 && n.matches(SKIP)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
    });
    let n;
    while((n = w.nextNode())){ if(n.nodeType === 3) doText(n); else doAttrs(n); }
  }

  document.documentElement.lang = 'en';
  walk(document.documentElement);
  new MutationObserver(muts=>{
    for(const m of muts){
      if(m.type === 'childList') m.addedNodes.forEach(walk);
      else if(m.type === 'characterData') doText(m.target);
      else if(m.type === 'attributes') doAttrs(m.target);
    }
  }).observe(document.documentElement, { childList:true, subtree:true, characterData:true, attributes:true, attributeFilter:ATTRS });

  // Native dialogs don't go through the DOM, so translate their message on the way in.
  ['alert','confirm','prompt'].forEach(fn=>{
    const orig = window[fn];
    if(typeof orig !== 'function') return;
    window[fn] = function(msg){ const args = Array.prototype.slice.call(arguments); if(typeof msg==='string') args[0] = tr(msg); return orig.apply(window, args); };
  });
})();
