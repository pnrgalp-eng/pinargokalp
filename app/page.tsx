const services = [
  ["01", "Schengen Vizesi", "Turistik, ticari ve aile ziyareti başvurularınız için ülkeye ve seyahat amacınıza özel dosya hazırlığı."],
  ["02", "İngiltere Vizesi", "Başvuru formundan finansal belgelere kadar tutarlı, eksiksiz ve kişiye özel başvuru yönetimi."],
  ["03", "Ulusal & Uzun Süreli", "Eğitim, çalışma, aile birleşimi ve uzun süreli kalış başvurularında uçtan uca danışmanlık."],
  ["04", "Ret & İtiraz Desteği", "Ret gerekçesinin incelenmesi, itiraz stratejisi ve yeni başvuru dosyasının güçlendirilmesi."],
];
const countries = ["Almanya", "Fransa", "İtalya", "İspanya", "Hollanda", "Avusturya", "İsviçre", "Çekya", "İngiltere", "Finlandiya", "Yunanistan", "Avustralya"];
const destinations = [
  { code:"EU", title:"Avrupa Ülkeleri", subtitle:"Schengen & Ulusal Vizeler", places:"Almanya · Fransa · İtalya · İspanya · Hollanda · Avusturya · İsviçre · Belçika · Danimarka · Finlandiya · Yunanistan · Çekya ve diğerleri", types:[
    ["Kısa Süreli Turistik","Gezi planı, konaklama, ulaşım ve mali yeterlilik belgeleriyle 90 güne kadar turistik Schengen başvuruları."],
    ["Ticari Vize","Fuar, toplantı, iş görüşmesi ve şirket ziyareti için davetiye ve ticari bağları destekleyen başvuru dosyası."],
    ["Aile & Arkadaş Ziyareti","Davet eden kişinin belgeleri, konaklama ve akrabalık/arkadaşlık bağını açıklayan ziyaret başvuruları."],
    ["Aile Birleşimi","Eş, çocuk veya aile yanına yerleşme amacıyla ülkenin ulusal vize ve oturum kurallarına özel hazırlık."],
    ["Çalışma İzni & Ulusal Vize","İş sözleşmesi, mesleki yeterlilik ve işveren belgeleriyle uzun süreli çalışma ve oturum süreçleri."] ]},
  { code:"US", title:"Amerika Birleşik Devletleri", subtitle:"ABD Vizeleri", places:"B1/B2 ziyaretçi vizeleri · Çalışma temelli kategoriler · Aile temelli göçmenlik süreçleri", types:[
    ["Turistik Vize","Tatil, gezi ve kısa süreli kişisel ziyaretler için B2 başvuru formu, profil analizi ve mülakat hazırlığı."],
    ["Ticari Vize","Toplantı, konferans, fuar ve iş görüşmeleri için B1 kapsamındaki seyahatin amacını destekleyen dosya."],
    ["Aile & Arkadaş Ziyareti","ABD’de yaşayan yakın veya arkadaş ziyaretlerinde davet, seyahat planı ve Türkiye’ye dönüş bağlarının sunumu."],
    ["Aile Birleşimi","Eş, nişanlı, çocuk ve uygun yakınlar için başvuru türünün belirlenmesi ve aşamalı belge hazırlığı."],
    ["Çalışma Vizeleri","İşveren sponsorluğu ve mesleki profile bağlı çalışma vizesi seçenekleri için ön değerlendirme ve dosya desteği."] ]},
  { code:"UK", title:"İngiltere", subtitle:"Birleşik Krallık Vizeleri", places:"Standard Visitor · Skilled Worker · Aile ve eş vizeleri", types:[
    ["Kısa Süreli Turistik","Seyahat planı, gelir kaynakları ve ülkeye dönüş bağlarını açıklayan Standard Visitor başvurusu."],
    ["Ticari Ziyaret","İş toplantısı, fuar, konferans ve izin verilen kısa süreli ticari faaliyetler için başvuru hazırlığı."],
    ["Aile & Arkadaş Ziyareti","Davet eden, konaklama, sponsorluk ve ziyaret amacını birlikte açıklayan ziyaretçi dosyası."],
    ["Aile Birleşimi","Eş/partner, çocuk ve uygun aile üyeleri için ilişki, gelir ve konaklama şartlarına odaklanan süreç."],
    ["Çalışma İzni","Sponsor işveren ve uygunluk şartlarına bağlı Skilled Worker ve ilgili çalışma kategorileri için dosya desteği."] ]},
  { code:"CA", title:"Kanada", subtitle:"Geçici & Kalıcı Başvurular", places:"Visitor Visa · Family Sponsorship · Work Permit", types:[
    ["Turistik Vize","Geçici ikamet vizesi kapsamında seyahat amacı, finansal durum ve geri dönüş bağlarının güçlü sunumu."],
    ["Ticari Ziyaret","İş bağlantıları, toplantı veya etkinlik katılımı için Business Visitor kapsamına uygun dosya hazırlığı."],
    ["Aile & Arkadaş Ziyareti","Davet mektubu, ev sahibi belgeleri, seyahat bütçesi ve ziyaret planıyla kısa süreli başvuru."],
    ["Aile Birleşimi","Eş/partner, çocuk, ebeveyn ve uygun aile sponsorluğu programları için kategori ve evrak değerlendirmesi."],
    ["Çalışma İzni","İş teklifi, işveren süreci veya uygun muafiyetlere bağlı geçici çalışma izni başvuru desteği."] ]},
  { code:"AU", title:"Avustralya", subtitle:"Ziyaret & Uzun Süreli Vizeler", places:"Visitor Visa · Partner & Family · Skilled / Employer Sponsored", types:[
    ["Turistik Vize","Tatil ve gezi amacıyla Visitor Visa başvurusu; finansal yeterlilik, seyahat planı ve geri dönüş bağları."],
    ["Ticari Ziyaret","Toplantı, konferans, iş bağlantısı ve kısa süreli ticari ziyaretler için uygun başvuru akışı."],
    ["Aile & Arkadaş Ziyareti","Yakın veya arkadaş yanında konaklama, davet ve sponsorluk belgeleriyle ziyaret başvurusu."],
    ["Aile Birleşimi","Eş/partner, çocuk, ebeveyn ve uygun aile kategorileri için ilişki kanıtları ve aşamalı süreç desteği."],
    ["Çalışma Vizeleri","Nitelikli göç, işveren sponsorluğu ve geçici çalışma seçenekleri için profile dayalı ön değerlendirme."] ]}
];
const flags: Record<string,string> = { EU:"🇪🇺", US:"🇺🇸", UK:"🇬🇧", CA:"🇨🇦", AU:"🇦🇺" };
const steps = [
  ["Ön değerlendirme", "Seyahat amacınızı ve başvuru profilinizi birlikte analiz ediyoruz."],
  ["Dosya stratejisi", "Size özel evrak listesi ve doğru başvuru planını oluşturuyoruz."],
  ["Başvuru hazırlığı", "Form, dilekçe, rezervasyon ve belgelerinizi titizlikle kontrol ediyoruz."],
  ["Süreç takibi", "Başvurudan pasaport teslimine kadar sizi düzenli bilgilendiriyoruz."],
];

export default function Home() {
  return <main>
    <header className="nav-wrap"><a className="brand" href="#top"><span className="brand-mark">PG</span><span><strong>Pınar Gökalp</strong><small>Vize Danışmanlığı</small></span></a><nav><a href="#hizmetler">Hizmetler</a><a href="#ulkeler">Ülkeler & Vizeler</a><a href="#surec">Süreç</a><a href="#hakkimda">Hakkımda</a><a href="#sss">S.S.S.</a></nav><a className="btn small" href="#iletisim">Ön Görüşme</a></header>
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">— Ankara’dan dünyaya profesyonel vize danışmanlığı</p><h1>Seyahatiniz hayal,<br/><em>başvurunuz uzman işi.</em></h1><p className="lead">Her dosya farklıdır. Başvurunuzu yalnızca hazırlamıyor; hikâyenizi doğru, tutarlı ve güçlü bir dosyaya dönüştürüyoruz.</p><div className="actions"><a className="btn" href="#iletisim">Ücretsiz Ön Değerlendirme →</a><a className="text-link" href="#hizmetler">Hizmetleri inceleyin ↓</a></div><div className="trust"><span><b>10+</b> ülke uzmanlığı</span><span><b>360°</b> başvuru desteği</span><span><b>1:1</b> kişisel danışmanlık</span></div></div><div className="hero-art"><div className="passport"><div className="p-top"><span>✦</span><small>TRAVEL<br/>DOCUMENT</small></div><div className="globe">◎</div><p>PINAR GÖKALP</p><small>VISA CONSULTANCY</small></div><div className="stamp one">VISA<br/><b>APPROVED</b></div><div className="stamp two">ANKARA<br/>TÜRKİYE</div><div className="plane">✈</div><p className="art-note">Dünyaya açılan yolculuğunuz<br/><b>doğru bir dosyayla başlar.</b></p></div></section>
    <section className="statement">Vize sürecindeki belirsizliği, <em>net bir yol haritasına</em> dönüştürüyoruz.</section>
    <section className="section services" id="hizmetler"><div className="section-head"><div><p className="eyebrow">Uzmanlık alanlarımız</p><h2>Her yolculuk için<br/>doğru strateji.</h2></div><p>Standart evrak listelerinin ötesine geçiyor, başvuru profilinize göre detaylı ve güvenilir bir dosya hazırlıyoruz.</p></div><div className="service-grid">{services.map(s=><article key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><a href="#iletisim">Bilgi alın →</a></article>)}</div></section>
    <section className="countries"><p>ÇALIŞTIĞIMIZ BAŞLICA ÜLKELER</p><div>{countries.map(c=><span key={c}>{c}</span>)}</div></section>
    <section className="quick-access" aria-label="Ülkelere hızlı erişim"><div className="quick-copy"><span>HIZLI ERİŞİM</span><b>Hangi ülkeye gitmek istiyorsunuz?</b></div>{destinations.map(d=><a href={`#${d.code}`} key={d.code}><span>{flags[d.code]}</span><div><b>{d.title}</b><small>{d.subtitle}</small></div><i>→</i></a>)}</section>
    <section className="section destinations" id="ulkeler"><div className="destination-heading"><p className="eyebrow">Ülkeye göre vize danışmanlığı</p><h2>Hedef ülkeniz,<br/><em>doğru başvuru kategoriniz.</em></h2><p>İlgilendiğiniz ülkeyi açarak turistik, ticari, aile–arkadaş ziyareti, aile birleşimi ve çalışma seçeneklerini kolayca inceleyebilirsiniz.</p></div><div className="destination-list">{destinations.map((d,i)=><details className="destination" id={d.code} key={d.code} open={i===0}><summary className="destination-title"><span className="flag">{flags[d.code]}</span><div><p>{d.subtitle}</p><h3>{d.title}</h3><small>{d.places}</small><div className="category-pills"><i>Turistik</i><i>Ticari</i><i>Ziyaret</i><i>Aile Birleşimi</i><i>Çalışma</i></div></div><b className="expand">+</b></summary><div className="visa-types">{d.types.map((t,j)=><div key={t[0]}><b>{String(j+1).padStart(2,"0")}</b><h4>{t[0]}</h4><p>{t[1]}</p></div>)}</div><a className="destination-cta" href="#iletisim">{d.title} için değerlendirme alın →</a></details>)}</div><p className="legal-note">Başvuru kategorileri kişisel durumunuza ve güncel resmi düzenlemelere göre değişebilir. Nihai karar ilgili ülkenin yetkili makamına aittir.</p></section>
    <section className="section process" id="surec"><div><p className="eyebrow">Nasıl çalışıyoruz?</p><h2>Dört adımda<br/>kontrollü süreç.</h2><p className="sub">Karışık prosedürleri sizin için sadeleştiriyor, her aşamada ne yapacağınızı açıkça anlatıyoruz.</p></div><div className="steps">{steps.map((s,i)=><article key={s[0]}><span>0{i+1}</span><div><h3>{s[0]}</h3><p>{s[1]}</p></div></article>)}</div></section>
    <section className="section about" id="hakkimda"><div className="portrait"><div>PG</div><span>“Başarılı bir başvurunun temeli<br/>doğru analiz ve özenli hazırlıktır.”</span></div><div className="about-copy"><p className="eyebrow">Tanışalım</p><h2>Merhaba, ben<br/><em>Pınar Gökalp.</em></h2><p>Yıllardır farklı ülke ve başvuru kategorilerinde edindiğim deneyimle, vize süreçlerini danışanlarım için anlaşılır ve yönetilebilir hale getiriyorum.</p><p>Her başvuruyu yalnızca belgelerden oluşan bir dosya olarak değil; doğru anlatılması gereken kişisel bir hikâye olarak görüyorum. Amacım size gerçekçi, şeffaf ve titiz bir danışmanlık sunmak.</p><div className="signature">Pınar Gökalp</div></div></section>
    <section className="section faq" id="sss"><div><p className="eyebrow">Merak edilenler</p><h2>Sık sorulan<br/>sorular.</h2></div><div className="faq-list"><details><summary>Vize alacağımı garanti ediyor musunuz?<span>+</span></summary><p>Vize kararı yalnızca ilgili konsolosluğa aittir. Biz başvurunuzun doğru, eksiksiz ve profilinizle tutarlı hazırlanmasını sağlarız.</p></details><details><summary>Danışmanlık süreci ne zaman başlamalı?<span>+</span></summary><p>Seyahat tarihinizden mümkün olduğunca erken iletişime geçmeniz, randevu ve belge hazırlığı için daha sağlıklı bir plan yapılmasını sağlar.</p></details><details><summary>Türkiye'nin her yerinden hizmet alabilir miyim?<span>+</span></summary><p>Evet. Görüşme ve dosya hazırlık süreçleri çevrim içi yürütülebilir.</p></details><details><summary>Ret aldıysam yeniden başvurabilir miyim?<span>+</span></summary><p>Evet. Önce ret gerekçesi ve eski dosya incelenir; ardından itiraz veya yeni başvuru seçeneklerinden uygun olan belirlenir.</p></details></div></section>
    <section className="contact" id="iletisim"><p className="eyebrow">Yolculuğunuzu birlikte planlayalım</p><h2>Vize sürecinizde<br/><em>yalnız değilsiniz.</em></h2><p>Profiliniz ve seyahat planınız için ilk değerlendirmeyi birlikte yapalım.</p><div><a className="btn gold" href="mailto:info@pinargokalp.com">E-posta Gönder →</a><a className="btn outline" href="https://wa.me/905000000000">WhatsApp'tan Yaz</a></div><small>* İletişim bilgileri yayına almadan önce güncellenecektir.</small></section>
    <footer><a className="brand" href="#top"><span className="brand-mark">PG</span><span><strong>Pınar Gökalp</strong><small>Vize Danışmanlığı</small></span></a><p>Profesyonel, şeffaf ve kişiye özel vize danışmanlığı.</p><div><a href="#hizmetler">Hizmetler</a><a href="#hakkimda">Hakkımda</a><a href="#iletisim">İletişim</a></div><small>© 2026 Pınar Gökalp. Tüm hakları saklıdır.</small></footer>
  </main>
}
