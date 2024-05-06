import Link from "next/link"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CreateContestCompVercel() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  The complete platform for building the Web
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and scale
                  the best web experiences.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="relative">
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  <CarouselItem>
                    <img
                      alt="Image 1"
                      className="aspect-video object-cover rounded-md"
                      height={252}
                      src="/placeholder.svg"
                      width={448}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      alt="Image 2"
                      className="aspect-video object-cover rounded-md"
                      height={252}
                      src="/placeholder.svg"
                      width={448}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      alt="Image 3"
                      className="aspect-video object-cover rounded-md"
                      height={252}
                      src="/placeholder.svg"
                      width={448}
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">New Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Faster iteration. More innovation.</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The platform for rapid progress. Let your team focus on shipping features instead of managing
                infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <RocketIcon className="h-10 w-10 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold">Infinite Scalability</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.
              </p>
            </div>
            <div className="grid gap-1">
              <GaugeIcon className="h-10 w-10 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold">Real-time Insights</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Get granular, first-party, real-user metrics on site performance per deployment.
              </p>
            </div>
            <div className="grid gap-1">
              <GlobeIcon className="h-10 w-10 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold">Personalization</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Deliver dynamic, personalized content, while ensuring users only see the best version of your site.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing for teams of all sizes</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the plan that's right for your business. No hidden fees, no surprises.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Starter</h3>
                <p className="text-gray-500 dark:text-gray-400">Perfect for individuals and small teams.</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">per month</span>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  1 user
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  1 GB storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  Basic analytics
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>
            <Card className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-gray-500 dark:text-gray-400">For growing teams and small businesses.</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">per month</span>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  5 users
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  10 GB storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  Advanced analytics
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>
            <Card className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-gray-500 dark:text-gray-400">For large teams and growing businesses.</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">per month</span>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  Unlimited users
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  Unlimited storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  Enterprise-grade analytics
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}