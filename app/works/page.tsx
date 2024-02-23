import { MainContainer } from "@/components/main-container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NavigationBar from "@/components/nav";

export default function Works() {
  return (
    <MainContainer>
      <NavigationBar />
      <section className="min-h-fit pb-24 md:px-24">
        <div className="w-full h-full p-4 md:p-0 mb-8">
          <h1 className="mb-2 text-2xl md:text-2xl text-main-gradient-t font-bold">
            ⋆ ✩ Graphic Designs ✮ ⋆
          </h1>
          <div className="h-full w-full rounded-xl">
            <Carousel className="w-full mx-auto h-[540px]">
              <CarouselContent className="h-[540px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem className="h-[540px]" key={index}>
                    <div className="p-1 h-[540px]">
                      <Card className="h-full border-none">
                        <CardContent className="flex rounded-xl h-full items-center bg-muted justify-center p-6 bg-muted"></CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="w-full h-full p-4 md:p-0">
          <h1 className="mb-2 text-2xl md:text-2xl text-main-gradient-t font-bold">
            ⋆ ✩ Systems ✮ ⋆
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-4 h-full w-full rounded-xl">
            <Card className="bg-white w-full border-none rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <CardHeader className="relative p-0">
                {/* <img
                    src="/watch.png"
                    alt="Product Image"
                    className="w-full h-48 bg-contain bg-center"
                  /> */}
                <div className="w-full h-48 bg-contain bg-center bg-muted"></div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2 text-muted-foreground">
                  System Title
                </CardTitle>
                <CardDescription className="text-muted-foreground/50 mb-4">
                  System Description goes here. Provide a brief overview of the
                  product.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white w-full border-none rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <CardHeader className="relative p-0">
                {/* <img
                    src="/watch.png"
                    alt="Product Image"
                    className="w-full h-48 bg-contain bg-center"
                  /> */}
                <div className="w-full h-48 bg-contain bg-center bg-muted"></div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2 text-muted-foreground">
                  System Title
                </CardTitle>
                <CardDescription className="text-muted-foreground/50 mb-4">
                  System Description goes here. Provide a brief overview of the
                  product.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white w-full border-none rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <CardHeader className="relative p-0">
                {/* <img
                    src="/watch.png"
                    alt="Product Image"
                    className="w-full h-48 bg-contain bg-center"
                  /> */}
                <div className="w-full h-48 bg-contain bg-center bg-muted"></div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2 text-muted-foreground">
                  System Title
                </CardTitle>
                <CardDescription className="text-muted-foreground/50 mb-4">
                  System Description goes here. Provide a brief overview of the
                  product.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white w-full border-none rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <CardHeader className="relative p-0">
                {/* <img
                    src="/watch.png"
                    alt="Product Image"
                    className="w-full h-48 bg-contain bg-center"
                  /> */}
                <div className="w-full h-48 bg-contain bg-center bg-muted"></div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2 text-muted-foreground">
                  System Title
                </CardTitle>
                <CardDescription className="text-muted-foreground/50 mb-4">
                  System Description goes here. Provide a brief overview of the
                  product.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white w-full border-none rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <CardHeader className="relative p-0">
                {/* <img
                    src="/watch.png"
                    alt="Product Image"
                    className="w-full h-48 bg-contain bg-center"
                  /> */}
                <div className="w-full h-48 bg-contain bg-center bg-muted"></div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2 text-muted-foreground">
                  System Title
                </CardTitle>
                <CardDescription className="text-muted-foreground/50 mb-4">
                  System Description goes here. Provide a brief overview of the
                  product.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white w-full border-none rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <CardHeader className="relative p-0">
                {/* <img
                    src="/watch.png"
                    alt="Product Image"
                    className="w-full h-48 bg-contain bg-center"
                  /> */}
                <div className="w-full h-48 bg-contain bg-center bg-muted"></div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2 text-muted-foreground">
                  System Title
                </CardTitle>
                <CardDescription className="text-muted-foreground/50 mb-4">
                  System Description goes here. Provide a brief overview of the
                  product.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}