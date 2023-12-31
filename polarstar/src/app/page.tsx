"use client";
import Image from "next/image";
import { FadeButton } from "@/components/fadeButton";
import { Button } from "@/components/button";
import { Onboarding } from "@/components/onboarding";
import { Introduce } from "@/components/introduce";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { OpacityAnimation } from "@/components/opacityAni";

export default function Home() {
  const description: string[] = [
    `주어진 질문에 답변해주세요
  AI가 알맞은 공고를 추천해드릴게요`,
    `추천된 공고를 확인해보세요
  마음에 드는 공고를 선택하고,
  강의 추천받기 버튼을 눌러주세요`,
    `선택한 공고에 맞는 강의 목록이예요
  추천해드린 강의로 합격 확률을 높여보세요`,
  ];

  const introComment: string = `
  북극성은 하늘의 지표에요
  밤하늘에서 빛나는 안내자
  항상 같은 위치에서 빛나기 때문에
  누구나 그 방향을 믿고 갈 수 있어요
  어둡고 불확실한 취업여정에서
  북극성이 길잡이가 되어드릴게요`;

  const router = useRouter();
  return (
    <>
      <Head>
        <title>북극성</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="bg-main-background-color min-h-screen relative">
        <div className="absolute w-full h-screen">
          <div className="flex justify-center">
            <img
              src="/images/onboarding/mainPageUpscaled.png"
              alt="background-image"
              className="h-1/2 absolute z-10 object-cover animate-fade-in"
            ></img>
          </div>
        </div>

        <main className="relative z-20 flex min-h-screen flex-col gap-4 items-center">
          <div className="h-32" />
          <h1
            id="serviceTitle"
            className=" font-OmyuPretty 
        tracking-widest text-white text-9xl"
          >
            북극성
          </h1>
          <h2
            id="serviceSubTitle"
            className=" font-OmyuPretty 
        tracking-widest text-white text-3xl"
          >
            AI가 당신의 취업을 도와드릴게요
          </h2>
          <div className="h-64" />
          <div className="h-16" />
          <OpacityAnimation>
            <img
              id="glow_comp"
              src="/images/onboarding/north.png"
              alt="polar-star-image"
              className="h-32 w-32 animate-fade-in-full
            "
            ></img>
          </OpacityAnimation>

          <div className="fixed top-3/5">
            <FadeButton
              onClick={() => {
                router.push("/qna");
              }}
            >
              시작하기
            </FadeButton>
          </div>

          <div className="h-8"></div>
          <div className="fixed top-4/5">
            <Introduce />
          </div>

          <OpacityAnimation>
            <div className="h-32"></div>
            <div
              id="silver"
              className="font-OmyuPretty 
        tracking-widest text-white text-3xl whitespace-pre-line text-center leading-[4rem]"
            >
              {introComment}
            </div>
          </OpacityAnimation>
          <div className="h-64"></div>

          <Onboarding
            imagePath="/images/onboarding/icon_1.png"
            imageAlt="QnA"
            title="STEP 1"
            description={description[0]}
          />
          <div className="h-64"></div>

          <Onboarding
            imagePath="/images/onboarding/icon_2.png"
            imageAlt="Get Idea"
            title="STEP 2"
            description={description[1]}
          />

          <div className="h-64"></div>

          <Onboarding
            imagePath="/images/onboarding/icon_3.png"
            imageAlt="Get Recommend"
            title="STEP 3"
            description={description[2]}
          />

          <div className="h-64"></div>
          <Button
            onClick={() => {
              router.push("/qna");
            }}
          >
            시작하기
          </Button>
          <div className="h-64"></div>
          <div className="h-64"></div>
        </main>
      </div>
    </>
  );
}
