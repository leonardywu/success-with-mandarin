// All rates are editable preview placeholders, not confirmed course prices.
const SITE = { phone: '6281361265888', placeholderPricing: true };
const courses = [
 {id:'hsk1',name:'HSK 1',label:'MULAI DARI DASAR',title:'Langkah pertama, percaya diri pertama.',description:'Kenalan dengan bunyi, pinyin, dan kosakata dasar Mandarin. Cocok untuk memulai dari nol.',rate:100000},
 {id:'hsk2',name:'HSK 2',label:'LANJUTKAN FONDASIMU',title:'Lebih banyak kata, lebih banyak cerita.',description:'Lanjutkan fondasi Mandarin dengan materi dan latihan sesuai kurikulum HSK 2.',rate:110000},
 {id:'hsk3',name:'HSK 3',label:'BANGUN KEBIASAAN',title:'Saatnya melangkah lebih jauh.',description:'Kembangkan pemahaman dan keterampilan berbahasa melalui kurikulum HSK 3.',rate:120000},
 {id:'hsk4',name:'HSK 4',label:'PERLUAS KEMAMPUAN',title:'Buka ruang untuk percakapan baru.',description:'Perdalam kosakata dan pemahaman Mandarin dengan materi sesuai kurikulum HSK 4.',rate:140000},
 {id:'hsk5',name:'HSK 5',label:'TANTANG DIRIMU',title:'Tujuan besar, langkah yang terarah.',description:'Lanjutkan pembelajaran Mandarin melalui materi dan latihan sesuai kurikulum HSK 5.',rate:160000},
 {id:'tocfl',name:'TOCFL',label:'SESUAIKAN DENGAN TUJUANMU',title:'Jalur TOCFL, mulai dari levelmu.',description:'Diskusikan level awal dan target TOCFL untuk menyusun pilihan kelas yang sesuai.',rate:140000}
];
const bundles=[{sessions:4,discount:0,name:'Coba & mulai',badge:'LANGKAH PERTAMA',description:'Beri ruang untuk awal yang baru.'},{sessions:12,discount:.1,name:'Bangun kebiasaan',badge:'USULAN HEMAT 10%',description:'Lebih rutin, selangkah lebih maju.'},{sessions:24,discount:.2,name:'Jaga momentum',badge:'USULAN HEMAT 20%',description:'Jadikan belajar bagian dari harimu.'}];
const money=n=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
const wa=text=>`https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
function wireWhatsApp(root=document){root.querySelectorAll('[data-wa]').forEach(a=>{a.href=wa(a.dataset.wa);a.target='_blank';a.rel='noopener noreferrer';});}
let selectedCourse=courses[0];
const tabs=document.querySelector('#course-tabs');
courses.forEach(course=>{const b=document.createElement('button');b.type='button';b.textContent=course.name;b.dataset.course=course.id;b.addEventListener('click',()=>renderCourse(course));tabs.append(b);});
function renderCourse(course){selectedCourse=course;tabs.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.course===course.id)));document.querySelector('#level-label').textContent=course.label;document.querySelector('#course-title').textContent=course.title;document.querySelector('#course-description').textContent=course.description;document.querySelector('#packages').innerHTML=bundles.map((b,i)=>{const normal=b.sessions*course.rate;const total=Math.round(normal*(1-b.discount));const message=`Halo Kak! Aku tertarik kursus ${course.name}, bundle ${b.sessions} sesi (${b.name}) di Success with Mandarin. Di preview, simulasi harganya ${money(total)}${b.discount?` dengan usulan diskon ${b.discount*100}%`:''}. Boleh konfirmasi harga final, durasi per sesi, format kelas, dan jadwal yang tersedia?`;return `<article class="package ${i===1?'featured':''}"><span class="badge">${b.badge}</span><h3>${b.sessions}× sesi</h3><p>${b.name} · ${course.name}</p><span class="price-old">${b.discount?`<s>${money(normal)}</s> · harga simulasi awal`:'Harga simulasi'}</span><div class="price">${money(total)}</div><span class="price-note">${money(total/b.sessions)} / sesi · simulasi</span><ul><li>${b.sessions} sesi belajar ${course.name}</li><li>Materi mengikuti kurikulum</li><li>Free e-book & sertifikat</li></ul><a class="button" href="${wa(message)}" target="_blank" rel="noopener noreferrer" aria-label="Pesan ${course.name} ${b.sessions} sesi melalui WhatsApp">Order now · Konsultasi <span>↗</span></a></article>`;}).join('');}
renderCourse(selectedCourse);wireWhatsApp();document.querySelector('#year').textContent=new Date().getFullYear();
// Casual progressive vocabulary practice; not an official HSK placement test.
const beginnerQuestions=[
 {word:'你好',pinyin:'nǐ hǎo',options:['Terima kasih','Halo','Selamat tinggal','Maaf'],answer:1,explain:'你好 (nǐ hǎo) adalah sapaan: halo.'},
 {word:'谢谢',pinyin:'xièxie',options:['Terima kasih','Sama-sama','Selamat pagi','Sampai jumpa'],answer:0,explain:'谢谢 (xièxie) berarti terima kasih.'},
 {word:'朋友',pinyin:'péngyou',options:['Guru','Keluarga','Teman','Dokter'],answer:2,explain:'朋友 (péngyou) berarti teman.'},
 {word:'学习',pinyin:'xuéxí',options:['Bekerja','Tidur','Berjalan','Belajar'],answer:3,explain:'学习 (xuéxí) berarti belajar.'},
 {word:'今天',pinyin:'jīntiān',options:['Kemarin','Hari ini','Besok','Minggu depan'],answer:1,explain:'今天 (jīntiān) berarti hari ini.'},
 {word:'喜欢',pinyin:'xǐhuan',options:['Suka','Lupa','Pulang','Membeli'],answer:0,explain:'喜欢 (xǐhuan) berarti suka atau menyukai.'},
 {word:'一起',pinyin:'yìqǐ',options:['Sendirian','Kadang-kadang','Bersama-sama','Selalu'],answer:2,explain:'一起 (yìqǐ) berarti bersama-sama.'},
 {word:'准备',pinyin:'zhǔnbèi',options:['Menunggu','Beristirahat','Menjawab','Mempersiapkan'],answer:3,explain:'准备 (zhǔnbèi) berarti mempersiapkan atau bersiap.'},
 {word:'重要',pinyin:'zhòngyào',options:['Mudah','Penting','Murah','Cepat'],answer:1,explain:'重要 (zhòngyào) berarti penting.'},
 {word:'进步',pinyin:'jìnbù',options:['Kemajuan','Kesempatan','Pertanyaan','Perjalanan'],answer:0,explain:'进步 (jìnbù) berarti kemajuan atau mengalami peningkatan.'}
];
// Original practice items using classic HSK 5 vocabulary. Not official exam questions.
const advancedQuestions = [
 {word:'犹豫',pinyin:'yóuyù',context:'面对这两个机会，他犹豫了很久。',options:['Merayakan','Ragu-ragu','Menolak','Menyadari'],answer:1,explain:'犹豫 berarti ragu-ragu atau bimbang. Kalimat ini berarti: menghadapi dua kesempatan ini, ia bimbang cukup lama.'},
 {word:'抽象',pinyin:'chōuxiàng',context:'这个概念太抽象，请举个具体的例子。',options:['Abstrak','Terperinci','Praktis','Biasa'],answer:0,explain:'抽象 berarti abstrak, berlawanan dengan 具体 (konkret). Kalimat ini meminta contoh konkret karena konsepnya terlalu abstrak.'},
 {word:'范围',pinyin:'fànwéi',context:'这个问题不在今天讨论的范围之内。',options:['Urutan','Tujuan','Cakupan','Kesimpulan'],answer:2,explain:'范围 berarti cakupan atau lingkup. Masalah ini berada di luar cakupan pembahasan hari ini.'},
 {word:'后果',pinyin:'hòuguǒ',context:'做决定之前，要考虑可能产生的后果。',options:['Alasan','Persiapan','Proses','Konsekuensi'],answer:3,explain:'后果 berarti konsekuensi, sering kali yang tidak diinginkan. Sebelum memutuskan, pertimbangkan akibat yang mungkin muncul.'},
 {sentence:'采用新的工作方法以后，团队的工作____明显提高了。',options:['风景','效率','温度','身份'],answer:1,explain:'效率 (xiàolǜ) berarti efisiensi. Setelah memakai metode kerja baru, efisiensi kerja tim meningkat jelas. 提高效率 berarti meningkatkan efisiensi.'},
 {sentence:'作为项目负责人，她愿意____这次失败的责任。',options:['承担','欣赏','交换','出版'],answer:0,explain:'承担 (chéngdān) berarti memikul atau menanggung. 承担责任 berarti memikul tanggung jawab. Ia bersedia bertanggung jawab atas kegagalan proyek.'},
 {sentence:'为了____类似的错误再次发生，我们需要仔细检查。',options:['鼓励','允许','避免','期待'],answer:2,explain:'避免 (bìmiǎn) berarti menghindari atau mencegah. Pemeriksaan teliti diperlukan agar kesalahan serupa tidak terulang.'},
 {sentence:'他本来想帮忙，没想到____把事情弄得更复杂了。',options:['终于','逐渐','分别','反而'],answer:3,explain:'反而 (fǎn’ér) berarti justru atau sebaliknya dari yang diharapkan. Ia ingin membantu, tetapi justru membuat masalah lebih rumit.'},
 {sentence:'经过几个月的练习，她____适应了用中文开会。',options:['偶然','逐渐','立刻','从来'],answer:1,explain:'逐渐 (zhújiàn) berarti secara bertahap. Setelah beberapa bulan berlatih, ia berangsur terbiasa mengikuti rapat dalam bahasa Mandarin.'},
 {sentence:'即使意见不同，我们也应该____彼此的选择。',options:['尊重','浪费','推迟','复制'],answer:0,explain:'尊重 (zūnzhòng) berarti menghormati. Walaupun berbeda pendapat, kita tetap perlu menghormati pilihan satu sama lain.'}
];
const quizLevels = {
 beginner: {label:'Beginner',detail:'Kosakata dasar + pinyin',description:'10 kata sehari-hari, lengkap dengan pinyin. Cocok untuk langkah pertamamu.',questions:beginnerQuestions},
 advanced: {label:'Advanced · HSK 5',detail:'Kosakata & konteks kalimat',description:'10 tantangan kosakata dan melengkapi kalimat untuk pelajar HSK 5. Penjelasan tersedia setelah menjawab.',questions:advancedQuestions}
};
const quiz=document.querySelector('#quiz-card');
let quizLevel='beginner', questions=beginnerQuestions, index=0, answers=[];
function startQuiz(){questions=quizLevels[quizLevel].questions;index=0;answers=[];renderQuestion();}
function intro(focusSelection=false){
 const level=quizLevels[quizLevel];
 quiz.innerHTML=`<div class="quiz-intro"><img class="quiz-illustration" src="assets/mandarin-flashcards.png" alt="Ilustrasi kartu kosakata Mandarin" width="150" height="150" loading="lazy"><div class="eyebrow">THE MANDARIN MINI QUIZ</div><h3>Pilih tantanganmu.</h3><div class="quiz-levels" role="group" aria-label="Pilih tingkat kuis">${Object.entries(quizLevels).map(([id,l])=>`<button type="button" data-level="${id}" aria-pressed="${id===quizLevel}"><strong>${l.label}</strong><span>${l.detail}</span></button>`).join('')}</div><p>${level.description}</p><button class="button orange-bg" id="start-quiz">Mulai ${level.label} <span>↗</span></button></div>`;
 quiz.querySelectorAll('[data-level]').forEach(b=>b.onclick=()=>{quizLevel=b.dataset.level;intro(true);});
 quiz.querySelector('#start-quiz').onclick=startQuiz;
 if(focusSelection)quiz.querySelector(`[data-level="${quizLevel}"]`).focus({preventScroll:true});
}
function renderQuestion(){
 const q=questions[index];
 quiz.innerHTML=`<div class="quiz-top"><span>${quizLevels[quizLevel].label}</span><span>${index+1} dari ${questions.length} pertanyaan</span></div><div class="progress" role="progressbar" aria-label="Kemajuan kuis" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${index}"><span style="width:${index/questions.length*100}%"></span></div><div class="question ${q.sentence?'sentence-question':''}"><span>${q.sentence?'Pilih kata yang tepat untuk melengkapi kalimat.':q.context?'Apa arti kata ini dalam konteks berikut?':'Apa arti kata ini?'}</span><h3 lang="zh-Hans" tabindex="-1">${q.sentence||q.word}</h3>${q.pinyin?`<p>${q.pinyin}</p>`:''}${q.context?`<p class="question-context" lang="zh-Hans">${q.context}</p>`:''}</div><div class="answers">${q.options.map((o,i)=>`<button class="answer" data-answer="${i}" ${q.sentence?'lang="zh-Hans"':''}>${String.fromCharCode(65+i)}. ${o}</button>`).join('')}</div><div class="feedback" id="feedback"></div>`;
 quiz.querySelector('.question h3').focus({preventScroll:true});
 quiz.querySelectorAll('.answer').forEach(b=>b.onclick=()=>answer(Number(b.dataset.answer)));
}
function answer(chosen){
 if(answers.length>index)return;
 const q=questions[index];answers.push(chosen);
 quiz.querySelectorAll('.answer').forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('correct');else if(i===chosen)b.classList.add('wrong');});
 quiz.querySelector('#feedback').innerHTML=`<p><strong>${chosen===q.answer?'对了！ Betul banget.':'Nggak apa-apa, sekarang kamu tahu!'}</strong><br>${q.explain}</p><button class="button navy" id="next-question">${index===questions.length-1?'Lihat hasilku':'Pertanyaan berikutnya'} →</button>`;
 const next=quiz.querySelector('#next-question');next.onclick=()=>{index++;index===questions.length?result():renderQuestion();};next.focus({preventScroll:true});
}
function result(){
 const score=answers.filter((a,i)=>a===questions[i].answer).length;
 const title=score>=8?'Kosakatamu makin mantap!':score>=5?'Fondasi yang bagus!':'Terus berlatih, kamu bisa!';
 const message=`Halo Kak! Aku baru menyelesaikan mini quiz ${quizLevels[quizLevel].label} di Success with Mandarin dengan skor ${score}/${questions.length}. Aku ingin konsultasi kelas yang cocok dan jadwal yang tersedia.`;
 quiz.innerHTML=`<div class="quiz-result"><div class="eyebrow">${quizLevels[quizLevel].label} · SELESAI ✦</div><div class="score">${score}<small> / ${questions.length}</small></div><h3 tabindex="-1">${title}</h3><p>Kamu sudah menyelesaikan ${questions.length} pertanyaan ${quizLevels[quizLevel].label}. Yuk, bawa rasa penasaranmu ke kelas Mandarin.</p><p><small>Hasil ini bukan penentuan level HSK/TOCFL. Konsultasi akan membantu memilih kelas.</small></p><a class="button orange-bg" href="${wa(message)}" target="_blank" rel="noopener noreferrer">Cari kelas yang cocok via WhatsApp ↗</a><button class="button" id="retry">Ulangi kuis ini ↻</button><button class="button" id="choose-level">Pilih tingkat kuis lain →</button><details class="review"><summary>Lihat semua jawaban & penjelasan</summary><ol>${questions.map((q,i)=>`<li><strong lang="zh-Hans">${q.sentence||q.word}</strong>${q.pinyin?` (${q.pinyin})`:''} — ${q.options[q.answer]}<br>${answers[i]===q.answer?'✓ Benar':`Jawabanmu: ${q.options[answers[i]]}`}<p>${q.explain}</p></li>`).join('')}</ol></details></div>`;
 quiz.querySelector('h3').focus({preventScroll:true});quiz.querySelector('#retry').onclick=startQuiz;quiz.querySelector('#choose-level').onclick=()=>intro(true);
}
intro();
