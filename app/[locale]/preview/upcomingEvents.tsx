import React from "react";
import { useAppSelector } from "../../../redux/store";
import { Event as EventType } from "../../../types/types";
import Event from "../../../components/cms/event";
import { formatDate } from "../../../helpers/formatDate";
function UpcomingEvents() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="mx-[100px] py-[64px] flex flex-col gap-[64px] items-center border-b-[2px] border-b-secondary-brown-light-active">
      <h2 className="font-sourceSerif text-[40px] capitalize">
        upcoming events
      </h2>
      <div className="flex flex-col gap-[24px] w-full">
        {(userInfo?.centerDTO.homePageDTO.eventDTOList.length as number) > 0 ? (
          userInfo?.centerDTO.homePageDTO.eventDTOList.map(
            (event: EventType, index) => {
              const {
                day: daytime,
                month: monthtime,
                time: startTime,
              } = formatDate(
                userInfo?.centerDTO.homePageDTO.eventDTOList[index].startAt
              );
              const { time: endTime } = formatDate(
                userInfo?.centerDTO.homePageDTO.eventDTOList[index].endAt
              );
              return (
                <div key={index}>
                  <Event
                    additionalInfoColor={
                      userInfo.centerDTO.homePageDTO.eventAdditionalInfoColor
                    }
                    backgroundColor={
                      userInfo.centerDTO.homePageDTO.eventBgColor
                    }
                    borderColor={
                      userInfo.centerDTO.homePageDTO.eventBorderColor
                    }
                    eventName={`${
                      userInfo?.centerDTO.homePageDTO.eventDTOList[index]
                        .name ??
                      "Community Iftar: Embracing the Spirit of Giving"
                    }`}
                    eventDescription={`${
                      userInfo?.centerDTO.homePageDTO.eventDTOList[index]
                        .description ??
                      "Join us for a transformative evening of Quranic wisdom and spiritual reflections. Open to all, deepen your understanding and strengthen your connection to the Divine."
                    }`}
                    eventTime={`${startTime} - ${endTime}`}
                    eventLocation={`${
                      userInfo?.centerDTO.homePageDTO.eventDTOList[index]
                        .location ??
                      "Al Noor Hall, Crescent Street, Harmonyville"
                    }`}
                    day={daytime}
                    month={monthtime}
                  />
                </div>
              );
            }
          )
        ) : (
          <div className="flex flex-col gap-[24px]">
            <Event
              eventName="Community Iftar: Embracing the Spirit of Giving"
              eventDescription="Come together in unity and generosity for our Community Iftar. Witness the power of collective giving as we share a delightful meal and extend a helping hand to those in need."
              eventTime="20:00 - 22:00"
              eventLocation="Unity Park, Peaceful Avenue, Serenity City"
              day={19}
              month="Aug"
            />
            <Event
              eventName="Youth Empowerment Workshop: Unleashing Potential"
              eventDescription="Calling all youth! Join motivational speakers for a journey of self-discovery and growth. Gain valuable skills, confidence, and unlock your leadership potential."
              eventTime="11:00 - 13:00"
              eventLocation="Inspirational Center, Hope Street, Progressville"
              day={22}
              month="Sep"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default UpcomingEvents;
