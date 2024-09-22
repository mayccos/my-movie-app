"use client";
import DatePicker from "react-datepicker";
import styles from "./Form.module.scss";
import { useRouter, usePathname, useParams } from "next/navigation";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import traductionPage from "@/utils/translatedText";

const Form = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    searchParams.append("sort_by", form.get("sort"));
    searchParams.append("release_date.gte", form.get("fromDate"));
    searchParams.append("release_date.lte", form.get("toDate"));

    router.push(`${pathname}?${searchParams.toString()}`);
  };

  const { ...text } = traductionPage();

  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>{text[2]}</h2>
      <div className={styles.date}>
        <h3>{text[3]}</h3>

        <div>
          <p>{text[1]}</p>
          <DatePicker
            selectsStart
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            dateFormat={
              params.locale == "en" ? "MM / dd / yyyy" : "dd / MM / yyyy"
            }
            name="fromDate"
            placeholderText={
              params.locale == "en" ? "mm / dd / yyyy" : "dd / mm / yyyy"
            }
          />
        </div>
        <div>
          <p>{text[0]}</p>
          <DatePicker
            selectsEnd
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            endDate={endDate}
            dateFormat={
              params.locale == "en" ? "MM / dd / yyyy" : "dd / MM / yyyy"
            }
            name="toDate"
            placeholderText={
              params.locale == "en" ? "mm / dd / yyyy" : "dd / mm / yyyy"
            }
          />
        </div>
      </div>
      <div>
        <h3>{text[4]}</h3>
        <select name="sort">
          <option value="popularity.desc">{text[5]}</option>
          <option value="vote_average.desc">{text[6]}</option>
          <option value="cote_count.desc">{text[7]}</option>
        </select>
      </div>
      <input type="submit" value={text[8]} />
    </form>
  );
};

export default Form;
