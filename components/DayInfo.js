import React from 'react';
import {Chip, Typography} from "@mui/material";
import store from "../store";
import {observer} from "mobx-react-lite";
import moment from "moment/moment";
import {BiDownArrow, BiUpArrow} from "react-icons/bi";

const DayInfo = ({day, full=false}) => {
    return (
        <div>
            {full ? (
                <>
                    <Typography variant="body2" gutterBottom>
                        Начало раб. дня: <span className="time">{moment(day.startTime).format("HH:mm")}</span>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Конец раб. дня: <span className="time">{moment(day.endTime).format("HH:mm")}</span>
                    </Typography>

                    <br/>
                </>
            ) : null}

            <Typography variant="body2" gutterBottom>
                Мал. стаканов в начале дня: <Chip label={day.startSmallCups} size={'small'} />
            </Typography>
            <Typography variant="body2" gutterBottom>
                Бол. стаканов в начале дня: <Chip label={day.startLargeCups} size={'small'} />
            </Typography>

            <br/>

            {full ? (
                <>
                    <Typography variant="body2" gutterBottom>
                        Мал. стаканов в конце дня: <Chip label={day.endSmallCups} size={'small'} />
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Бол. стаканов в конце дня: <Chip label={day.endLargeCups} size={'small'} />
                    </Typography>

                    <br/>

                    <Typography variant="body2" gutterBottom>
                        Мал. стаканов продано: <Chip label={day.smallCupsSold} size={'small'} />
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Бол. стаканов продано: <Chip label={day.largeCupsSold} size={'small'} />
                    </Typography>

                    <br/>

                    <Typography variant="body2" gutterBottom>
                        Общая касса: <Chip label={day.need_total} size={'small'} />
                    </Typography>

                    <br/>
                </>
            ) : null}
        </div>
    );
};

export default observer(DayInfo);