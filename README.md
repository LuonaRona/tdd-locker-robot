# LockerRobot

## 安装依赖

`npm install`

## 测试

`npm run test`

## 编译

`npm run build`

## Tasking

1. Given 包裹尺寸为 S，存在多个 S 号的 Locker，且有可用容量,
   When 存包,
   Then 存入成功，直接存入 S 号的 Locker，给顾客 S 号 Locker 的相应票据

2. Given 包裹尺寸为 S，存在多个 S 号的 Locker ，但都没有可用容量了,
   When 存包,
   Then 存入失败，提示“储物柜已满！”

3. Given S 号 Locker 的票据，有效的票据,
   When 取包,
   Then 取包成功，取出 S 尺寸包裹

4. Given S 号 Locker 的票据，伪造的票据,
   When 取包,
   Then 取包失败，提示“无效票据！”

5. Given 不是 S 号 Locker 的票据,
   When 取包,
   Then 取包失败，提示“票据的型号不对！”

6. Given 包裹尺寸为 M，PrimaryLockerRobot 管理多个 Locker，所有 Locker 都有可用容量,
   When 存包,
   Then 存入成功，包裹存入 PrimaryLockerRobot 管理的第 1 个 Locker，给顾客 M 号 Locker 的相应票据

7. Given 包裹尺寸为 M，PrimaryLockerRobot 管理多个 Locker，第 1 个 Locker 已存满，第 2 个 Locker 还有可用容量,
   When 存包,
   Then 存入成功，包裹存入 PrimaryLockerRobot 管理的第 2 个 Locker，给顾客 M 号 Locker 的相应票据

8. Given 包裹尺寸为 M，PrimaryLockerRobot 管理的 Locker 都没有可用容量了,
   When 存包,
   Then 存入失败，提示“储物柜已满！”

9. Given M 号 Locker 的票据，有效票据,
   When 取包,
   Then 取包成功，取出 M 尺寸包裹

10. Given M 号 Locker 的票据，伪造的票据,
    When 取包,
    Then 取包失败，提示“无效票据！”

11. Given 不是 M 号 Locker 的票据,
    When 取包,
    Then 取包失败，提示“票据的型号不对！”

12. Given 包裹尺寸为 L，SuperLockerRobot 只管理 1 个 Locker，且有可用容量,
    When 存包,
    Then 存入成功，包裹存入 SuperLockerRobot 管理的 Locker，给顾客 L 号 Locker 的相应票据

13. Given 包裹尺寸为 L，SuperLockerRobot 管理多个 Locker，第 2 个 Locker 空置率（可用容量 / 容量）最大,
    When 存包,
    Then 存入成功，包裹存入 SuperLockerRobot 管理的第 2 个 Locker，给顾客 L 号 Locker 的相应票据

14. Given 包裹尺寸为 L，SuperLockerRobot 管理的 Locker 都没有可用容量了,
    When 存包,
    Then 存入失败，提示“储物柜已满！”

15. Given L 号 Locker 的票据，有效票据,
    When 取包,
    Then 取包成功，取出 L 尺寸包裹

16. Given L 号 Locker 的票据，伪造的票据,
    When 取包,
    Then 取包失败，提示“无效票据！”

17. Given 不是 L 号 Locker 的票据,
    When 取包,
    Then 取包失败，提示“票据的型号不对！”

18. Given 包裹尺寸为 S，LockerRobotManager 管理的 S 号 Locker 有可用容量,
    When LockerRobotManager 存包,
    Then 存入成功，给顾客 S 号 Locker 的相应票据

19. Given 包裹尺寸为 S，LockerRobotManager 管理的 S 号 Locker 没有可用容量了,
    When LockerRobotManager 存包,
    Then 存入失败，提示“储物柜已满！”

20. Given S 号 Locker 的票据，有效的票据,
    When LockerRobotManager 取包,
    Then 取包成功，取出 S 尺寸包裹

21. Given S 号 Locker 的票据，伪造的票据,
    When LockerRobotManager 取包,
    Then 取包失败，提示“无效票据！”

22. Given 不是 S 号 Locker 的票据,
    When LockerRobotManager 取包,
    Then 取包失败，提示“票据的型号不对！”

23. Given 包裹尺寸为 M，LockerRobotManager 管理的 PrimaryLockerRobot 管理的 Locker 有可用容量
    When LockerRobotManager 存包,
    Then 存入成功，包裹存入 PrimaryLockerRobot 管理的 Locker，给顾客 M 号 Locker 的相应票据

24. Given 包裹尺寸为 M，LockerRobotManager 管理的 PrimaryLockerRobot 管理的 Locker 没有可用容量了,
    When LockerRobotManager 存包,
    Then 存入失败，提示“储物柜已满！”

25. Given M 号 Locker 的票据，有效票据,
    When LockerRobotManager 取包,
    Then 取包成功，取出 M 尺寸包裹

26. Given M 号 Locker 的票据，伪造的票据,
    When LockerRobotManager 取包,
    Then 取包失败，提示“无效票据！”

27. Given 不是 M 号 Locker 的票据,
    When LockerRobotManager 取包,
    Then 取包失败，提示“票据的型号不对！”

28. Given 包裹尺寸为 L，LockerRobotManager 管理的 SuperLockerRobot 管理的 Locker 有可用容量,
    When LockerRobotManager 存包,
    Then 存入成功，包裹存入 SuperLockerRobot 管理的 Locker，给顾客 L 号 Locker 的相应票据

29. Given 包裹尺寸为 L，LockerRobotManager 管理的 SuperLockerRobot 管理的 Locker 没有可用容量了,
    When LockerRobotManager 存包,
    Then 存入失败，提示“储物柜已满！”

30. Given L 号 Locker 的票据，有效票据,
    When LockerRobotManager 取包,
    Then 取包成功，取出 L 尺寸包裹

31. Given L 号 Locker 的票据，伪造的票据,
    When LockerRobotManager 取包,
    Then 取包失败，提示“无效票据！”

32. Given 不是 L 号 Locker 的票据,
    When LockerRobotManager 取包,
    Then 取包失败，提示“票据的型号不对！”
