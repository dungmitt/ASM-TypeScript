import { useEffect } from "react";
import '../css/css.css'

export const Scrolling = () => {
    useEffect(() => {
        let counter = 1;
        let timerIdRef = setInterval(() => {
            let radioCheck = document.querySelector(`#radio${counter}`) as HTMLInputElement;
            if (radioCheck) {
                radioCheck.checked = true;
                counter++;
                if (counter > 5) {
                    counter = 1;
                }
            }
        }, 5000);

        return () => clearInterval(timerIdRef);
    }, [])

    return (
        <div className="flex justify-center items-center">
            <div className="m-0 p-0 flex justify-center items-center mt-5">
                <div className="w-[800px] h-[400px] rounded-[10px] overflow-hidden shadow-2xl">
                    <div className="w-[500%] h-[420px] flex">
                        <input type="radio" className="hidden" name="radio-btn" id="radio1" />
                        <input type="radio" className="hidden" name="radio-btn" id="radio2" />
                        <input type="radio" className="hidden" name="radio-btn" id="radio3" />
                        <input type="radio" className="hidden" name="radio-btn" id="radio4" />
                        <input type="radio" className="hidden" name="radio-btn" id="radio5" />

                        <div className="slide first">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/bts-apple-sliding.png" className="w-[800px] h-[400px]" alt="banner1" />
                        </div>
                        <div className="slide">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/sli-ipad.png" className="w-[800px] h-[400px]" alt="banner2" />
                        </div>
                        <div className="slide">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/oppo-reno-1-dathang-sliding-02.png" className="w-[800px] h-[400px]" alt="banner3" />
                        </div>
                        <div className="slide">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/tab-s9-2tr-gift-sliding-001.png" className="w-[800px] h-[400px]" alt="banner4" />
                        </div>
                        <div className="slide">
                            <img src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/pre-wf-1000xm5-slide.png" className="w-[800px] h-[400px]" alt="banner5" />
                        </div>

                        <div className="navigation-auto">
                            <div className="auto-btn1 hidden"></div>
                            <div className="auto-btn2 hidden"></div>
                            <div className="auto-btn3 hidden"></div>
                            <div className="auto-btn4 hidden"></div>
                            <div className="auto-btn5 hidden"></div>
                        </div>
                    </div>

                    <div className="absolute w-[800px] mt-[-40px] flex justify-center">
                        <label htmlFor="radio1" className="manual-btn hidden"></label>
                        <label htmlFor="radio2" className="manual-btn hidden"></label>
                        <label htmlFor="radio3" className="manual-btn hidden"></label>
                        <label htmlFor="radio4" className="manual-btn hidden"></label>
                        <label htmlFor="radio5" className="manual-btn hidden"></label>
                    </div>
                </div>
            </div>

            <div className="w-[295px] mt-8">
                <div className="ml-3">
                    <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/RightBanner_PreOrder_WATCH6_Series_07.png" alt="GALAXY S23 ULTRA<br>Ưu đãi khủng" className="rounded-[10px] shadow mb-[15px]" />
                    <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/ipadth7-new.png" alt="IPAD CHÍNH HÃNG<br>Lên đời từ 6.69 triệu" className="rounded-[10px] shadow mb-[15px]" />
                    <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/asus%20tuf.jpg" alt="ASUS VIVOBOOK<br>Cấu hình vô đối" className="rounded-[10px] shadow mb-[15px]" />
                </div>
            </div>
        </div>
    )
}