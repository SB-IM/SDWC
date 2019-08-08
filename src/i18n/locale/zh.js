import elMsg from 'element-ui/lib/locale/lang/zh-CN';

export const name = '简体中文';

export const locale = {
  ...elMsg,
  login: {
    username: '账号',
    error_username: '请输入账号',
    password: '密码',
    error_password: '请输入密码',
    button: '登录',
    failed: '登录失败：用户名或密码错误'
  },
  header: {
    title: 'Superdock 无人机自动机场',
    notify: '通知记录',
    notify_clear: '清空',
    notify_empty: '暂无通知记录',
    status: '通讯状态',
    logout: '退出',
    air: '无人机',
    depot: '机场',
    normal: '正常',
    shutdown: '已关闭',
    net_error: '网络错误',
    never_online: '未连接',
    abnormal: '异常'
  },
  sidemenu: {
    overview: '概况',
    plan: '任务管理',
    depot: '机场',
    air: '无人机'
  },
  plan: {
    view: {
      title: '查看任务',
      run: '执行任务',
      stop: '终止任务',
      history: '任务执行历史',
      run_time: '执行时间',
      raw_data: '原始数据',
      auto_run: '自动处理结果',
      logs: '飞行日志',
      sever_logs: '服务器日志',
      pending: '任务发送中 ...',
      start_run: '当前任务开始执行',
      start_fail: '任务执行失败：{code}',
      stop_run: '当前任务已经终止',
      stop_fail: '任务终止失败：{code}'
    },
    edit: {
      add: '新建任务',
      alter: '修改任务',
      save_plan: '保存任务',
      delete_plan: '删除任务',
      name_inp: '请输入任务名称',
      desc_inp: '请输入任务描述',
      first_time_inp: '请选择首次执行时间',
      depot_inp: '请选择起降机场',
      air_inp: '请选择执飞无人机',
      cycle_inp: '请选择执行频次',
      cycle_type_1: '手动',
      cycle_type_2: '一次',
      cycle_type_3: '每小时',
      cycle_type_4: '每天',
      cycle_type_5: '每周',
      cycle_type_6: '每月',
      select_map: '选择地图',
      please_name: '请输入任务名称！',
      please_desc: '请输入任务描述！',
      please_air: '请选择执飞无人机！',
      please_depot: '请选择起降机场！',
      please_cycle: '请选择执行频次！',
      please_file: '请上传航点站务文件！',
      delete_tips: '此操作将删除该任务，是否继续？'
    },
    plan_name: '任务名称',
    plan_desc: '任务描述',
    plan_desc_no: '暂无任务描述',
    plan_air: '执飞无人机',
    plan_depot: '起降机场',
    plan_cycle: '执行频次',
    plan_mapfile: '航点站务文件',
    plan_first_time: '首次执行时间',
    weather: '天气',
    fly_check: '飞行前检查',
    plan_createtime: '创建时间',
    fly_check_desc: '我们需要检查设备情况，确保可以安全执行任务。',
    start_now: '立即启动'
  },
  air: {
    status_standby: '待机',
    status_flying: '飞行中',
    status_error: '错误',
    status_: '--',
    mode_auto: '自动模式',
    mode_guide: '引导模式',
    mode_fixed: '定点模式',
    mode_back: '返航模式',
    mode_land: '降落模式',
    mode_: '--模式',
    flight_time: '时长 {t}',
    flight_speed: '速度 {s}',
    flight_height: '高度 {h}',
    battery_remain: '电量 {num}',
    battery_voltage: '电压 {num}',
    gps_satellites: ' {num} 星',
    pitch_angle: '云台俯仰角',
    gimbal_mode_mavlink: '手动',
    gimbal_mode_neutral: '自动',
    gimbal_mode_rc: '遥控器',
    screenshot: '截图',
    recording: '录制屏幕',
    air_control: '无人机控制',
    air_hover: '悬停',
    air_return: '返航',
    air_takeoff: '起飞',
    air_runplan: '开始任务',
    air_up: '上升 {num} 米',
    air_down: '下降 {num} 米',
    air_landpoint: '降落到备用点',
    air_land: '直接降落',
    air_emergency_stop: '急停',
    air_emergency_stop_tips: '桨叶急停，需特别小心',
  },
  depot: {
    monitor: '实时监控',
    weather: '室外天气',
    weather_caption: '雷达降水强度',
    weather_feel: '天气',
    wind_caption: '实时风速',
    min_before: '一分钟前',
    now: '现在',
    wind_speed: '风速',
    wind_direction: '风向',
    humidity: '湿度',
    temperature: '气温',
    start_charge: '开始充电',
    stop_charge: '停止充电',
    motor_run: '电机运动',
    emergency_stop: '急停',
    open_door: '打开舱门',
    close_door: '关闭舱门',
    air_fixed: '固定无人机',
    air_release: '松开无人机',
    air_bat_putin: '安装飞机电池',
    air_bat_pickout: '取下飞机电池',
    air_reset: '复位',
    platform_rise: '平台升顶',
    platform_bottom: '平台降底',
    platform_level: '平台举平',
    status_normal: '状态正常',
    status_abnormal: '状态异常'
  },
  common: {
    air: '无人机',
    depot: '机场',
    cancel: '取消',
    comfirm: '确定',
    view: '查看',
    download: '下载',
    upload: '上传',
    re_upload: '重新上传',
    retry: '重试',
    connecting: '连接中 ...',
    back: '取消并返回',
    data_none: '暂无相关数据',
    debug_tips: '以下命令仅限开发人员调试使用',
    send: '发送',
    clear: '清空',
    control: '控制',
    advanced_control: '高级控制',
    debug: '调试',
    status: '状态',
    air_status: '无人机状态',
    depot_status: '机场状态',
    not_operational: '通讯状态异常，无法发送控制指令。',
    none: '暂无',
    logs: '日志',
    no_video: '未找到视频源',
    operate_pending: '操作执行中 ...',
    operate_success: '操作成功',
    operate_error: '操作失败',
    system_tips: '系统提示',
    plan_ready: '任务准备就绪，是否立即执行？',
    battery: {
      title: '智能电池',
      id: '序列号',
      temp: '温度',
      cap: '容量',
      cur: '电流',
      remain: '剩余',
      cycle: '循环次数',
      vol_cell: '电压',
      vol: '总电压',
      status: '状态',
      bal: '均衡状态',
      st: {
        'DISCHARGING': '放电中',
        'CHARGING': '充电中',
        'Charging Fully': '已充满',
        'Switch ON Discharging': '放电开',
        'Switch OFF Discharging': '放电关闭',
        'Switch ON Charging': '充电开',
        'Switch OFF Charging': '充电关闭',
        'PROTECTION(Short-circuited)': '短路保护',
        'PROTECTION(Low Temperature)': '放电低温保护',
        'PROTECTION(High Temperature)': '放电高温保护',
        'PROTECTION(Low Temperature Charging)': '充电低温保护',
        'PROTECTION(High Temperature Charging)': '充电高温保护',
        'PROTECTION(Overcharging)': '过充保护',
        'PROTECTION(Over Discharging)': '过放保护',
        'PROTECTION(Overcurrent Charging)': '充电过流保护',
        'PROTECTION(Overcurrent Discharging)': '放电过流保护',
      }
    }
  },
  weather: {
    clear_day: '晴天',
    clear_night: '晴夜',
    partly_cloudy: '多云',
    cloudy: '阴',
    rain: '雨',
    snow: '雪',
    wind: '风',
    haze: '雾霾沙尘'
  },
  map: {
    waypoint: '路径点',
    satellite: '卫星地图',
    clear: '清除轨迹'
  },
  preflight: {
    title: '起飞前检测',
    no_drone: '找不到无人机',
    no_depot: '找不到机场',
    realtime: '实时天气',
    wind: '风速',
    rain: '降水',
    forecast: '天气预报',
    intensity: '雷达降水强度',
    distance: '最近降水带',
    comfirm: '确认执行'
  }
};
