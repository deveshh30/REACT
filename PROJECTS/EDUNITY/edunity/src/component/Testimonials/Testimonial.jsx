import React, { useRef } from 'react'
import './testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {
    
    const slider = useRef();
    let tx = 0;
    const slideForward = ()=> {
        if(tx > -75){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=> {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div>
      <div className="poits">
        <img src={next_icon} className='next-btn' onClick={slideForward} alt="" />
        <img src={back_icon} className='back-btn' onClick={slideBackward} alt="" />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div className="">
                                <h3>William Jack</h3>
                                <span>New York, USA</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere optio eum quidem rem! Sed labore nesciunt quos earum modi maiores, quasi similique temporibus, in amet tempore fugiat aspernatur deserunt, dicta magnam est exercitationem itaque vel quas molestias beatae error expedita quod. Iste, reprehenderit, ratione deserunt laboriosam fuga, aut cum numquam accusantium magni totam officiis architecto impedit! Accusantium nam temporibus asperiores voluptates tenetur doloribus provident, dolores quas culpa mollitia blanditiis praesentium dignissimos quo ex. Minus dolor at cum amet blanditiis rem debitis asperiores molestias labore accusantium, voluptatibus nobis culpa natus nemo. Suscipit hic reprehenderit ratione facere praesentium, unde blanditiis assumenda voluptatem!</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div className="">
                                <h3>Travis Head</h3>
                                <span>Sydney, Australia</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis fugit minima quisquam consequuntur provident corrupti accusamus voluptate? Sit autem fugiat quaerat eum sunt sint animi placeat doloremque enim, distinctio recusandae nostrum voluptate accusamus voluptatem. Dolorem rem voluptatem quis iste eligendi sapiente, quos architecto quae et error, deserunt necessitatibus assumenda soluta. Sequi ullam magni porro cum nam similique sed architecto incidunt animi hic mollitia consectetur, quos ipsam atque voluptates adipisci blanditiis fugiat sapiente voluptatibus nemo ipsum libero beatae a? Quidem ullam quasi maiores nesciunt quis minima voluptate, ipsam aliquam. Commodi maxime saepe adipisci atque totam minus provident repellat ea nostrum quos?</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div className="">
                                <h3>Mitchell Stark</h3>
                                <span>Perth, Australia</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea perferendis neque unde voluptatum dolorum labore laborum. Nostrum earum deserunt alias quaerat maiores rem aliquid, atque molestiae iure animi enim minus? Odit, tenetur laborum asperiores optio mollitia eius itaque repellat enim porro ab, ad dolores necessitatibus a aut non! Distinctio, ea! Sit consectetur quibusdam quo nam nesciunt vitae quaerat ullam velit ex dolorum voluptatibus ab cum reprehenderit modi ducimus autem, at qui impedit cupiditate, unde laboriosam atque totam voluptatum. Quisquam odio molestiae omnis culpa a perspiciatis esse harum necessitatibus unde iusto eaque quaerat saepe inventore odit illo, debitis fugit? Culpa, neque.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div className="">
                                <h3>Casley Roy</h3>
                                <span>New York, USA</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium et tempora iusto, inventore eos maiores sequi porro consectetur eligendi voluptate, quos ducimus accusamus. Omnis unde aspernatur nisi quae eum hic adipisci officiis, harum facilis, itaque est porro ipsum quia, laudantium minima repudiandae fugiat quidem inventore eligendi modi. Alias aspernatur sed accusantium maiores voluptatum a delectus ratione earum id, dicta beatae facilis, aperiam odit distinctio ipsa nihil, natus suscipit quaerat odio. Ullam necessitatibus adipisci dolor, in modi sint sequi nesciunt harum culpa vero quaerat, error fuga dolorum atque dicta. Recusandae ad laboriosam, excepturi alias suscipit cum numquam quia minima maiores pariatur!</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
