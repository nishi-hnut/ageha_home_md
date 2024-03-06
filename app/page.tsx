"use client"

import Image from "next/image"
import { useEffect } from "react"
import { Link as Scroll } from "react-scroll"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Home(): JSX.Element {
  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  const setAnimation = () => {
    gsap.utils.toArray(".animation").forEach((target) => {
      gsap.fromTo(
        target,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: target,
            start: "top center",
            end: "bottom center",
            onEnter: () => console.log("scroll In"),
            onEnterBack: () => console.log("scroll Back"),
          },
        }
      )
    })
  }

  return (
    <main className="max-w-md mx-auto">
      <header className="w-full sticky top-0 z-50 bg-white border-b">
        <div className="text-center  justify-between py-7 flex container">
          <div className="flex">
            <Scroll
              to="top"
              smooth={true}
              duration={600}
              offset={-135}
              className="text-4xl font-bold cursor-pointer"
            >
              AGEHA
            </Scroll>
            <div className="text-start">
              <div className="text-xs pt-1">アゲハライブ</div>
              <div className="text-xs">業界人気 No.1 ✨</div>
            </div>
          </div>
          {/* ここにお仕事ログインページLinkを追加 */}
          {/* 登録ボタンを追加 */}
          <div className="">
            <button className="border px-4 py-3 text-white bg-blue-400 rounded-3xl mr-10 hover:bg-blue-500">
              登録
            </button>
            <button className="border px-4 py-3 text-white bg-pink-400 rounded-3xl hover:bg-pink-500">
              ログイン
            </button>
          </div>
        </div>
        <div className="text-center justify-start mb-1">
          <ul className="flex">
            <Scroll
              to="task"
              smooth={true}
              duration={600}
              offset={-55}
              className="mr-12 font-bold text-gray-500 cursor-pointer li-css"
            >
              お仕事
            </Scroll>
            <Scroll
              to="value"
              smooth={true}
              duration={600}
              offset={-55}
              className="mr-12 font-bold text-gray-500 cursor-pointer li-css"
            >
              報酬
            </Scroll>
            <Scroll
              to="merit"
              smooth={true}
              duration={600}
              offset={-55}
              className="mr-12 font-bold text-gray-500 cursor-pointer li-css"
            >
              メリット
            </Scroll>
            <Scroll
              to="QA"
              smooth={true}
              duration={600}
              offset={-55}
              className="mr-12 font-bold text-gray-500 cursor-pointer li-css"
            >
              Q&A
            </Scroll>
            <Scroll
              to="good"
              smooth={true}
              duration={600}
              offset={-55}
              className="font-bold text-gray-500 cursor-pointer li-css"
            >
              おすすめ
            </Scroll>
          </ul>
        </div>
      </header>

      {/* 画像 */}
      <div id="top" className="">
        <div className="relative w-full">
          <img
            src="https://as2.ftcdn.net/v2/jpg/06/66/39/51/1000_F_666395131_xcH5fxuuGTrC5kQxuYDgbFBrQDeNBCWJ.jpg"
            alt=""
          />
          <div className="absolute top-1/4 left-2/4">
            <div className="text-2xl font-bold ">隙間じかんに</div>
            <div className="text-2xl font-bold mt-10">仕事する！</div>
            <div className="text-2xl font-bold mt-10">
              <span className="">時給</span>４５００円以上
            </div>
          </div>
        </div>
      </div>

      {/* お仕事内容 */}
      <div id="task" className="mb-8 animation">
        <div className="text-center">
          <div className="text-black text-2xl font-bold mt-20 px-4 bg-pink-50 border-t-2 border-b-2">
            チャットレディーのお仕事内容
          </div>
        </div>
        <div className="text-black text-xl font-bold mt-16 bg-pink-50 border-l-4 border-pink-400 px-1 py-1">
          ライブチャットとは
        </div>

        <div>
          <p className="mt-5">
            ライブチャットで働く女性のことをチャットレディと呼びます。
          </p>
          <p className="mt-2">
            ライブチャットとは男性が女性とコミュニケーションを取るために利用する、主に分課金サービスです。
          </p>
          <p className="text-red-400">
            24時間365日、貴女の好きな時間・タイミングでお仕事をすることが出来ます。
          </p>
          <p className="mt-2">
            お仕事から帰ってきて夜に副業として稼いだり、見たいテレビが始まるまでや家事の合間など隙間時間にお小遣い稼ぎをしたりするのにピッタリです！
          </p>
          <p className="mt-2">
            女性はWEBカメラを利用しビデオ通話のような感じでお客さんと話します
          </p>
          <p className="mt-3">※顔出しするかどうかはご自身での判断となります</p>
        </div>
      </div>

      {/* 内容 */}
      <div id="value" className="animation">
        <div className="text-center">
          <div className="text-black text-2xl font-bold mt-20 px-4 border-t-2 border-b-2 bg-pink-50">
            報酬内容
          </div>
        </div>
        <div className="text-black text-xl font-bold mt-16 bg-pink-50 border-l-4 border-pink-400 px-1 py-1">
          報酬について
        </div>
        <div className="w-full shadow-xl mt-5">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/25/19/45/piggy-bank-2889042_1280.jpg"
            alt=""
          />
        </div>
        <div className="">
          <p className="mt-5">
            チャットレディーになる上で気になることの一つは報酬です。
          </p>
          <p className="mt-2">
            報酬はユーザーが消費した金額の◯％～となります。
          </p>
          <p className="mt-2">
            報酬につきましては、十分理解してから登録をしましょう。
          </p>
        </div>
      </div>

      {/* チャットレディーのメリット */}
      <div id="merit" className="animation">
        <div id="" className="text-center">
          <div className="text-black text-2xl font-bold mt-20 px-4 bg-pink-50 border-t border-b">
            チャットレディーのメリット
          </div>
        </div>
        {/* 画像つき説明 */}
        <div className="w-full mt-16">
          {/* 1 */}
          <div className="text-black text-xl font-bold mt-16 bg-pink-50 border-l-4 border-pink-400 px-1 py-1">
            在宅で稼げる
          </div>
          <div className="mt-5">
            <img
              src="https://media.istockphoto.com/id/1303965572/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E8%87%AA%E5%AE%85%E3%81%AB%E3%81%84%E3%82%8B%E5%A5%B3%E6%80%A7.jpg?s=612x612&w=0&k=20&c=4NF7-RsvPS2JzLKfimSl_wgkHUEl2TVYVrO8rlO22wY="
              alt=""
            />
          </div>
          <div className="">
            <p className="mt-5">
              チャットレディは、隙間時間や在宅でも稼げるのが魅力です。
            </p>
            <p className="mt-2">
              男性会員と直接会う事がないので「安心・安全な高収入バイト」
            </p>
            <p className="mt-2">
              としてチャットレディ（チャトレ）を始める女性が増えています。
            </p>
          </div>
          {/* 2 */}
          <div className="text-black text-xl font-bold mt-16 bg-pink-50 border-l-4 border-pink-400 px-1 py-1">
            スマホ一台で始められる
          </div>
          <div className="mt-5">
            <img
              src="https://media.istockphoto.com/id/1414778121/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E9%83%A8%E5%B1%8B%E3%81%A7%E3%82%B9%E3%83%9E%E3%83%9B%E3%82%92%E6%93%8D%E4%BD%9C%E3%81%99%E3%82%8B%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%A5%B3%E6%80%A7.jpg?s=612x612&w=0&k=20&c=4SW1rMvPBpjDZLzLsdK49r8IZ_d01iWBBr2r8TrypR8="
              alt=""
            />
          </div>
          <div className="">
            <p className="mt-5">
              チャットレディは、スマホやパソコンで手軽に始められる仕事です。
            </p>
            <p className="">
              近年ではスマホの普及率も上がっているので、どの世代も始めやすい仕事として注目されています。
            </p>
            <p className="mt-2">
              ただし、ビデオ通話や音声通話でやり取りを行う場合は、通信環境が整っていないと、通話が途切れる恐れがあります。完全在宅でチャットレディをしたい方は、通信環境も整えておきましょう。
            </p>
          </div>
          {/* 3 */}
          <div className="text-black text-xl font-bold mt-16 bg-pink-50 border-l-4 border-pink-400 px-1 py-1">
            顔出しなし・ノンアダでもOK
          </div>
          <div className="mt-5">
            <img
              src="https://media.istockphoto.com/id/680368662/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%A5%B3%E6%80%A7%E3%81%AE%E8%A1%97.jpg?s=612x612&w=0&k=20&c=7HerT3uT8XWZyUElJmmD6oTpPzGZH7PdjxPut9L3oTo="
              alt=""
            />
          </div>
          <div className="">
            <div className="mt-5">
              <p>アダルトなイメージを強く持つ人こそ、チャットレディへの</p>
              <p>
                登録を迷うかもしれません。しかし、顔出しなし・ノンアダでも出演できます！
              </p>
            </div>
            <div className="mt-2">
              <p>
                そうではなく、「アダルト要素があっても稼ぎたい」「むしろエッチな話題が好き」
              </p>
              <p>
                という人であれば、チャットレディとして大きなメリットが得られます！
              </p>
            </div>
            <div className="mt-2">
              <p>アダルトチャットレディは男性から需要が高く、</p>
              <p>会話が苦手でもパフォーマンスで集客することができますよ。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Q&A */}
      <div id="QA" className="animation">
        <div className="text-center pt-20">
          <div className="text-black text-2xl font-bold mt-2 px-4 bg-pink-50 border-t border-b">
            Q&A
          </div>
        </div>
        <div className="max-w-5xl mx-auto pt-10">
          <div className="border p-10 bg-white rounded-xl shadow-xl">
            <div className="text-xl border-b">
              <span className="text-pink-400 text-2xl mr-5">Q</span>
              登録するのにお金かかるの？
            </div>

            <div className="mt-5 text-opacity-5">
              <span className="text-blue-300 text-2xl mr-5">A</span>
              登録するのに費用は一切かかりません。完全に無料で登録していただけます。
              また退会したい場合も無料で行っていただけます。
              登録や退会に金銭は一切かかりませんので、始めてみたいなと思っている方はぜひお気軽に登録してお試しいただければと思います♪
            </div>
          </div>
          <div className="mt-16 border p-10 bg-white rounded-xl shadow-xl">
            <div className="text-xl border-b">
              <span className="text-pink-400 text-2xl mr-5">Q</span>
              初めてなので不安です・・・
            </div>

            <div className="mt-5 text-opacity-5">
              <span className="text-blue-300 text-2xl mr-5">A</span>
              初めてのお仕事だと、不安や心配はつきものですよね・・・。
              <br />
              AGEHAライブチャットではそんな不安や心配を解消して頂くため様々な取り組みをしています！
              不安なこと、分からないことがあったらスタッフにお気軽にご相談ください！
              お仕事を始めた後ももちろんスタッフが丁寧にサポートさせて頂きます。お問い合わせに対応させて頂くのはもちろん、時には貴女のチャット画面にスタッフが出向いて直接やりとりをしながらアドバイスやサポートをさせて頂きます。
            </div>
          </div>
          <div className="mt-16 border p-10 bg-white rounded-xl shadow-2xl mb-8">
            <div className="text-xl border-b">
              <span className="text-pink-400 text-2xl mr-5">Q</span>
              チャットレディ未経験でも稼げますか？
            </div>

            <div className="mt-5 text-opacity-5">
              <span className="text-blue-300 text-2xl mr-5">A</span>
              チャットレディにご応募される方の多くが未経験者からのスタートです。実は未経験の方こそライブチャットでの人気が高く、高収入を得るにはもってこいの状態だったりします。詳しいお仕事の説明やお稼ぎアップのためのノウハウをご活用頂くことで、どなたも簡単に高収入をお稼ぎになられています！！！
            </div>
          </div>
        </div>
      </div>

      {/* おすすめの人 */}
      <div id="good" className="bg-50 animation">
        <div className="text-center pt-20">
          <div className="text-black text-2xl font-bold mt-2 border-t border-b bg-pink-50">
            どんな人におすすめ？
          </div>
          <div className="mt-16 border-b-2">
            フリーターはもちろん以下の方もおすすめしています！
          </div>
        </div>
        <div className="mt-10 mb-10">
          <div className="justify-center">
            <div className="">
              <img
                src="https://media.istockphoto.com/id/680368662/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%A5%B3%E6%80%A7%E3%81%AE%E8%A1%97.jpg?s=612x612&w=0&k=20&c=7HerT3uT8XWZyUElJmmD6oTpPzGZH7PdjxPut9L3oTo="
                alt=""
                className="w-full h-40 object-cover left-12"
              />
            </div>
            <div className="hukidasi bg-pink-50 shadow-xl">
              <div className="px-10 pt-5 pb-3">
                <h2 className="text-2xl font-bold  underline decoration-slate-400">
                  大学生・専門学校生の方
                </h2>
                <p className="mt-5">
                  「学校の授業やサークル、就活で忙しくって時間もお金も余裕がないなぁ・・・」
                  そんな大学生・専門学校生さんにおすすめなのがチャットレディーのお仕事なんです。
                  チャットレディーはこの日のこの時間に稼働するといった決まり事はないため、いつでも自分の好きなタイミングでお仕事をして高収入を得ることができます。
                  日払いにも対応しているので、急に飲食業のバイトがなくなって困っているといった方にもおすすめです。
                  個室で仕事をするため面倒な人間関係もなく、バイト先の人間関係に疲れてしまった・・・という方にもぴったりですよ。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <div className="justify-center">
            <div className="">
              <img
                src="https://media.istockphoto.com/id/680368662/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%A5%B3%E6%80%A7%E3%81%AE%E8%A1%97.jpg?s=612x612&w=0&k=20&c=7HerT3uT8XWZyUElJmmD6oTpPzGZH7PdjxPut9L3oTo="
                alt=""
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="hukidasi bg-pink-50 shadow-xl">
              <div className="px-10 pt-5 pb-3">
                <h2 className="text-2xl font-bold  underline decoration-slate-400">
                  OLの方
                </h2>
                <p className="mt-5">
                  お休みの日や仕事帰りで疲れてないときに働きたいなど、本業の都合にあわせて好きなタイミングで働くことができます。
                  「本業だけでは生活費が足りない」「副業として稼ぎたい」そんなOLさんにぴったりなのがチャットレディーです！
                  本業の会社にバレないように副業していただくことが可能です。申告の際に気をつけることなど、スタッフが相談させていただきます！
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <div className="justify-center">
            <div className="">
              <img
                src="https://media.istockphoto.com/id/680368662/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%A5%B3%E6%80%A7%E3%81%AE%E8%A1%97.jpg?s=612x612&w=0&k=20&c=7HerT3uT8XWZyUElJmmD6oTpPzGZH7PdjxPut9L3oTo="
                alt=""
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="hukidasi bg-pink-50 shadow-xl">
              <div className="px-10 pt-5 pb-3">
                <h2 className="text-2xl font-bold  underline decoration-slate-400">
                  主婦の方
                </h2>
                <p className="mt-5">
                  昼間空いている時間に働いて自分のお小遣いを稼ぎたい、そんな主婦の方におすすめなのがチャットレディーです。
                  家事や子育てに忙しい主婦の方でも、隙間時間に稼いでいただけます！
                  外に出て接客業をするのはウイルスが心配・・・そんな主婦の方でも、チャットレディーは在宅で稼いでいただけるので安心です。
                  家族バレしたくない方通勤で稼ぎたいという方も、チャットブースは清潔な個室なので安全ですよ。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ご応募はこちら */}
      <div className="">
        <div className="text-center pt-20">
          <div className="text-black text-4xl font-bold pt-2 px-4 border-b-red-200">
            ご応募はこちら！
          </div>
          <div className="mt-16 pb-8 ">
            <button className="border w-60 h-14 text-2xl bg-blue-300 text-white rounded-full hover:bg-blue-500">
              登録
            </button>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="text-xs">
        <div className="text-center mt-16">
          <div>サービス概要及び料金表</div>
          <div className="flex mt-4 justify-center">
            <div className="mx-2">利用規約</div>
            <div className="mx-2">特定商取引に基づく表示</div>
            <div className="mx-2">プライバシーポリシー</div>
          </div>
          <div className="my-4">© AGEHAライブチャット All rights reserved.</div>
        </div>
      </footer>
    </main>
  )
}
