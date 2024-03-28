import "./home.css";
import logo from "../../assets/logo.jpg";
import n1 from "../../assets/n1.webp";
import n2 from "../../assets/n2.webp";
import n3 from "../../assets/n3.webp";
import n4 from "../../assets/n4.webp";
import n5 from "../../assets/n5.webp";
import n6 from "../../assets/n6.webp";
import a1 from "../../assets/a1.webp";
import a2 from "../../assets/a2.webp";
import a3 from "../../assets/a3.webp";
import a4 from "../../assets/a4.webp";
import insta from "../../assets/instagram.svg";
import phone from "../../assets/phone.svg";

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} />
        </div>
        <h1>Nature Ninjas</h1>
      </div>

      <div className="content">
        <p>
          مشروعي يدعوكم إلى إعادة اكتشاف العالم من حولنا من خلال نزهات ومغامرات
          تأخذ أنفاسكم. نحن نؤمن بأن كل رحلة هي فرصة لتجربة شيء جديد، لتقوية
          الروابط، ولخلق ذكريات تدوم مدى الحياة. من خلال مشروعنا، ستتمكن من
          استكشاف الطبيعة الخلابة، من الجبال الشاهقة إلى الأنهار الزرقاء
          والغابات الساحرة، كل ذلك بينما تكون في صحبة أشخاص يشاركونك نفس الشغف
          بالمغامرة والاكتشاف.
        </p>
        <div className="grid">
          <img src={n1} />
          <img src={n2} />
          <img src={n3} />
          <img src={n4} />
          <img src={n5} />
          <img src={n6} />
        </div>
        <p>
          نقدم لك تجارب مصممة بعناية لتناسب كل المستويات، من المبتدئين إلى
          المغامرين ذوي الخبرة، ونضمن أن تجد معنا الأمان والمتعة والإثراء. سواء
          كنت تبحث عن هروب قصير من روتين الحياة اليومي، أو مغامرة شاملة تختبر
          فيها حدودك، فإننا نعدك بتجربة لا تُنسى.
        </p>
        <div className="grid">
          <img src={a1} />
          <img src={a2} />
          <img src={a3} />
          <img src={a4} />
        </div>
        <p>
          انضم إلينا لتجديد طاقتك، لتتحدى نفسك، ولتكتشف جمال العالم من منظور
          جديد. معنا، كل خطوة هي بداية لقصة جديدة، وكل نزهة هي فرصة لتجد شيئًا
          جديدًا في نفسك وفي العالم. لا تدع الحياة تمر من حولك دون أن تعيش حقًا.
          انطلق في مغامرة معنا واكتب فصلاً جديدًا مليئًا بالإثارة والاستكشاف في
          قصة
        </p>
      </div>

      <div className="footer">
        <a href="https://www.instagram.com/nature_ninjas1/">
          <div className="linkContant">
            <p>تابعنا على إنستجرم</p>
            <img src={insta} />
          </div>
        </a>
        <a href="tel:+96176440512">
          <div className="linkContant">
            <p>تواصل معنا </p>
            <img src={phone} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
