import { Container, Typography } from "@mui/material";

const kiriazi = () => {
    return(
        <Container sx={{ marginTop: '50px' }}>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight:"bold" }}>خدمة صيانة وايت ويل</Typography>
            <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '20px' }}>
            مركز صيانة وايت ويل المعتمد يوفر لكم كافة خدمات الدعم الفني لجميع العملاء أينما كانوا في مصر و كافة المحافظات ونعمل على توفير لكم كافة الاحتياجات الممكنة وخدمات الإصلاح المنزلي لجميع منتاجات وايت ويل التي تتوفر في كافة الأسواق كما نقوم بخدمتكم علي مدار 24 ساعة طوال ايام الاسبوع
            </Typography>
        </Container>
    )
};

export default kiriazi;