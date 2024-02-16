import React, { useState, useRef, useEffect } from "react";

const TermsComponent: React.FC = () => {
  const [showRules, setShowRules] = useState(true);
  const thirdDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        thirdDivRef.current &&
        !thirdDivRef.current.contains(event.target as Node)
      ) {
        setShowRules(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setShowRules(false);
  };

  return (
    <div dir="rtl" className="fixed inset-0 flex justify-center items-center">
      {showRules && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center backdrop-blur-sm">
          <div ref={thirdDivRef} className="bg-white p-4 relative sec_div">
            <h2 className="text-center py-3 font-extrabold div3_h2">
              قوانین و مقررات
            </h2>
            <button
              className="px-2 py-2.5 text-black rounded justify-items-end absolute top-2 left-4 font-thin div3_btn"
              onClick={handleClose}
            >
              X
            </button>
            <div className="div4">
              <p className="leading-24 pb-4 div4_p">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد.
              </p>

              <li className="leading-24 pb-2 div4_li">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
              </li>
              <li className="leading-24 pb-2 div4_li">
                و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                گذشته حال و آینده،
              </li>
              <li className="leading-24 pb-2 div4_li">
                شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
                بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                پیشرو در زبان فارسی ایجاد کرد،
              </li>
              <li className="leading-24 pb-2 div4_li">
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                حروفچینی دستاوردهای اصلی، و
              </li>
              <li className="leading-24 div4_li">
                جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                قرار گیرد.
              </li>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsComponent;
