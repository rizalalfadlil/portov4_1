import { Carousel, ConfigProvider, Modal, theme, Tooltip } from "antd";
import React, { useRef } from "react";
import { works, WorksProps } from "../../gd/works";
import { TbBoxMultiple } from "react-icons/tb";
import { useDraggable } from "react-use-draggable-scroll";
import JSZip from "jszip";
import { ImFolderDownload } from "react-icons/im";
import { RiFileDownloadFill } from "react-icons/ri";
const { darkAlgorithm } = theme;
export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { events } = useDraggable(scrollRef as any);
  const groupedWorks = works.reduce((acc, work) => {
    if (!acc[work.category]) {
      acc[work.category] = [];
    }
    acc[work.category].push(work);
    return acc;
  }, {} as Record<string, WorksProps[]>);

  const filteredWorks = groupedWorks[activeCategory];
  const [openedWork, setOpenedWork] = React.useState<WorksProps | null>(null);
  return (
    <section className="space-y-8">
      <div className="w-full max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <h4 className="text-muted">A selection of all my design works</h4>
      </div>
      <div
        {...events}
        className="flex text-lg cursor-default bg-black/20 overflow-x-auto whitespace-nowrap hiddenscroll select-none rounded-xl "
        ref={scrollRef}
      >
        <div
          className={`hover:bg-white/25 p-4 px-8 duration:300 transition-all ${
            activeCategory === "All" ? "bg-white/20" : ""
          }`}
          onClick={() => setActiveCategory("All")}
        >
          <h3>all</h3>
        </div>
        {Object.entries(groupedWorks).map(([category], index) => (
          <div
            key={index}
            className={`hover:bg-white/25 p-4 px-8 duration:300 transition-all ${
              activeCategory === category ? "bg-white/20" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            <h3>
              {category} <span className="text-blue-300 ms-2">{groupedWorks[category].length}</span>
            </h3>
          </div>
        ))}
      </div>
      <ProjectPopup openedWork={openedWork} setOpenedWork={setOpenedWork} />
      <div>
        {filteredWorks ? (
          <>
            <p className="text-xl font-bold">{activeCategory}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 py-4">
              {filteredWorks.map((work, index) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${work.imageUrl[0]})` }}
                  className="w-full flex items-end justify-end p-4 aspect-square bg-cover bg-no-repeat bg-center hover:scale-105 duration:300 transition-all bg-black/50 rounded-xl"
                  onClick={() => setOpenedWork(work)}
                >
                  {work.imageUrl.length > 1 && (
                    <div className="shadow-lg p-2 rounded-full bg-black/50 flex items-center justify-center gap-2">
                      <TbBoxMultiple className="text-white text-2xl" />{" "}
                      <span>{work.imageUrl.length}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          Object.entries(groupedWorks).map(([category, works], index) => (
            <div key={index}>
              <p className="text-xl font-bold mt-8 mb-2">{category} <span className="text-blue-300 ms-2">{works.length}</span></p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 py-4">
                {works.map((work, index) => (
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${work.imageUrl[0]})` }}
                    className="w-full flex items-end justify-end p-4 aspect-square bg-cover bg-no-repeat bg-center hover:scale-105 duration:300 transition-all bg-black/50 rounded-xl"
                    onClick={() => setOpenedWork(work)}
                  >
                    {work.imageUrl.length > 1 && (
                      <div className="shadow-lg p-2 rounded-full bg-black/50 flex items-center justify-center gap-2">
                        <TbBoxMultiple className="text-white text-2xl" />{" "}
                        <span>{work.imageUrl.length}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

const ProjectPopup = ({
  openedWork,
  setOpenedWork,
}: {
  openedWork: WorksProps | null;
  setOpenedWork: (work: WorksProps | null) => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const downloadSingleImage = () => {
    const link = document.createElement("a");
    link.href = openedWork?.imageUrl[currentImageIndex] || "";
    link.download = openedWork?.title || "";
    link.click();
  }
  const downloadAllImages = () => {
    const zip = new JSZip();
    openedWork?.imageUrl.forEach((url, index) => {
      zip.file(`${index}.png`, url);
    });
    zip.generateAsync({ type: "blob" }).then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = openedWork?.title || "";
      link.click();
    });
  }
  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <Modal
        open={openedWork !== null}
        onCancel={() => setOpenedWork(null)}
        centered
        width={1024}
        footer={null}
      >
        <div>
          <Carousel
            arrows={(openedWork?.imageUrl?.length || 0) > 1}
            dots={(openedWork?.imageUrl?.length || 0) > 1}
            className="bg-black/20 select-none cursor-grab"
            draggable
            afterChange={(index) => setCurrentImageIndex(index)}
          >
            {openedWork?.imageUrl.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={openedWork?.title}
                className="h-[600px] aspect-square object-contain"
              />
            ))}
          </Carousel>
          <div className="mt-4 space-y-4">
            <p className="text-xl font-bold">{openedWork?.title}</p>
            <p>{openedWork?.description}</p>

            <div className="flex gap-4 *:p-2 *:px-4 *:rounded-md">
              <Tooltip title="Download Image">
                <button
                  className="bg-[#B3B3B3] hover:bg-[#A5A5A590] transition-all duration-300 text-black"
                  onClick={downloadSingleImage}
                >
                  <RiFileDownloadFill size={24} />
                </button>
              </Tooltip>
              {
                (openedWork?.imageUrl.length || 0) > 1 && (
                  <Tooltip title="Download All Images">
                    <button
                      className="bg-[#B3B3B3] hover:bg-[#A5A5A590] transition-all duration-300 text-black"
                      onClick={downloadAllImages}
                    >
                      <ImFolderDownload size={24} />
                    </button>
                  </Tooltip>
                )
              }
            </div>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  );
};
