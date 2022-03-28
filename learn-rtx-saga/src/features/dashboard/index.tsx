import { ChatBubble, ChatRounded, LinearScaleSharp, PeopleAlt } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { useEffect } from "react";
import { dashboardActions, selectDashboardLoading, selectDashboardStatistics, selectHighestStudentList, selectLowestStudentList, selectRankingByCityList } from "./dashboardSlice";
import { StatisticItem } from "./components/StatisticItem";
import '../dashboard/dashboard.css';
import { Widget } from "./components/Widget";
import { StudentRankingList } from "./components/StudentRankingList";

export function Dashboard() {
    const dispatch = useAppDispatch();

    const loading = useAppSelector(selectDashboardLoading);
    const statistics = useAppSelector(selectDashboardStatistics);
    const highestStudentList = useAppSelector(selectHighestStudentList);
    const lowestStudentList = useAppSelector(selectLowestStudentList);
    const rankingByCityList = useAppSelector(selectRankingByCityList);

    console.log({
        loading,
        statistics,
        highestStudentList,
        lowestStudentList,
        rankingByCityList
    })

    useEffect(() => {
        dispatch(dashboardActions.fetchData());
    }, [dispatch]);

    return (
        <div className="dashboard">
            <Box marginLeft={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}  style={{width:"500px"}}>
                        <StatisticItem 
                            icon={<PeopleAlt fontSize="large" color="primary"/>} 
                            label="male" 
                            value={statistics.maleCount}
                            />
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                        <StatisticItem 
                            icon={<ChatRounded fontSize="large" color="primary"/>} 
                            label="female" 
                            value={statistics.femaleCount}/>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                        <StatisticItem 
                            icon={<ChatBubble fontSize="large" color="primary"/>} 
                            label="mark >= 8" 
                            value={statistics.highMarkCount}/>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                        <StatisticItem 
                            icon={<LinearScaleSharp fontSize="large" color="primary"/>} 
                            label="mark <= 5" 
                            value={statistics.lowMarkCount}
                        />
                    </Grid>
                </Grid>

                {/* All students rankings */}
                <Box mt={4}>
                    <Typography variant="h4">All Students</Typography>

                     <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={6} className="ranking">
                            <Widget title="Student with highest mark">
                                <StudentRankingList studentList={highestStudentList} />
                            </Widget>
                        </Grid>

                        <Grid item xs={12} md={6} lg={6}>
                            <Widget title="Student with lowest mark">
                                <StudentRankingList studentList={lowestStudentList}/>
                            </Widget>
                        </Grid>

                     </Grid>
                </Box>
            </Box>
        </div>
    )
}