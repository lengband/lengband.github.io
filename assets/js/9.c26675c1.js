(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{371:function(t,_,v){t.exports=v.p+"assets/img/fengnuoyiman.8b5b6ff1.jpg"},397:function(t,_,v){"use strict";v.r(_);var a=v(45),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"冯诺依曼模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冯诺依曼模型"}},[t._v("#")]),t._v(" 冯诺依曼模型")]),t._v(" "),a("ul",[a("li",[t._v("输入设备")]),t._v(" "),a("li",[t._v("输出设备")]),t._v(" "),a("li",[t._v("存储器")]),t._v(" "),a("li",[t._v("运算器")]),t._v(" "),a("li",[t._v("控制器")])]),t._v(" "),a("p",[a("img",{attrs:{src:v(371),alt:""}})]),t._v(" "),a("h4",{attrs:{id:"cpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[t._v("#")]),t._v(" CPU")]),t._v(" "),a("p",[t._v("冯诺依曼模型中运算器和控制器主要是 CPU 负责。为了方便计算较大的数值，CPU 每次可以计算多个字节的数据。")]),t._v(" "),a("ul",[a("li",[t._v("如果 CPU 每次可以计算 4 个 byte，那么我们称作 32 位 CPU（1byte=8bit(位)，4*8=32位）")]),t._v(" "),a("li",[t._v("如果 CPU 每次可以计算 8 个 byte，那么我们称作 64 位 CPU（8*8=64位）\n这里的 32 和 64，称作 "),a("strong",[t._v("CPU 的位宽")]),t._v("。\nCPU中包括运算单元，控制单元和寄存器。\n寄存器又分为1)通用寄存器，用于用户编程使用。2) 特殊寄存器，用于存储下一个要执行的指令的内存地址 3) 读取到的指令会放到指令寄存器。\nCPU从寄存器的读取速度远远高于从内存读取")])]),t._v(" "),a("h5",{attrs:{id:"_64位和32位的计算-cpu的位宽会对计算造成什么影响-要用32位宽的-cpu-加和两个64位的数字可以运算吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_64位和32位的计算-cpu的位宽会对计算造成什么影响-要用32位宽的-cpu-加和两个64位的数字可以运算吗"}},[t._v("#")]),t._v(" 64位和32位的计算，CPU的位宽会对计算造成什么影响，要用32位宽的 CPU，加和两个64位的数字可以运算吗？")]),t._v(" "),a("p",[t._v("因为 32 位宽的 CPU 中没有 64 位的寄存器，所以就算地址总线、数据总线都超过 32 位，读入的数据也只能是 32 位。\n因此必须把两个 64 位数字拆成 4 个 32 位数字来计算，这样就需要一个算法，比如用像小时候做加法竖式一样，先加和两个低位的 32 位数字，算出进位，然后加和两个高位的 32 位数字，最后再加上进位。\n而 64 位的 CPU 就可以一次读入 64 位的数字，同时 64 位的 CPU 内部的逻辑计算单元，也支持 64 位的数字进行计算。但是你千万不要仅仅因为位宽的区别，就认为 64 位 CPU 性能比 32 位高很多。\n要知道大部分应用不需要计算超过 32 位的数字，比如你做一个电商网站，用户的金额通常是 10 万以下的，而 32 位有符号整数，最大可以到 20 亿。所以这样的计算在 32 位还是 64 位中没有什么区别。")]),t._v(" "),a("h4",{attrs:{id:"存储器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储器"}},[t._v("#")]),t._v(" 存储器")]),t._v(" "),a("ul",[a("li",[t._v("内部存储器（内存）")]),t._v(" "),a("li",[t._v("外部存储器（磁盘、光盘、U盘、硬盘等）")])]),t._v(" "),a("h5",{attrs:{id:"为什么-2-32-4g内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-2-32-4g内存"}},[t._v("#")]),t._v(" 为什么 2^32=4G内存")]),t._v(" "),a("p",[t._v("2的32次方：2 代表二进制，因为计算机中电容表示数据 只能表示有 1 ，0  两种情况, 就像磁极只能分南北.电极只能分正负一样.一个电容代表两种情况.N个电容就能代表2^N中情况.但是如果单单使用1个电容来代表一个我们学术上使用的数字,不利于管理.所以一般使用8个电容，也就是8bits来代表一个学术上的数字. 8bits = 1 bytes 咱们通常所说的"),a("code",[t._v("1GB")]),t._v("是"),a("code",[t._v("1G")]),t._v("的"),a("code",[t._v("byte")]),t._v("\n1MB = 1024 KB = 1024 * 1024 B\n1GB = 1024 MB = 1024 * 1024 KB = 1024 * 1024 * 1024 B= 2^10 * 2^10 * 2^10 B = 2^30 B\n4GB = 2^32B\n32位系统是说总线有32根子线组成, 一根子线指向一个电容矩阵(可以将一个矩阵认为 1Byte ).一个电容矩阵中可以容纳8个电容,也就是 8bits所以32位的系统"),a("code",[t._v("2^32")]),t._v("是"),a("code",[t._v("4G Bytes")]),t._v("   <=>   4G bytes   <=>  4G * 8 bits.理论上64位系统最大虚拟内存空间可以达到 2^64 GB (但是实际上并没有这么大)")]),t._v(" "),a("h4",{attrs:{id:"总线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总线"}},[t._v("#")]),t._v(" 总线")]),t._v(" "),a("blockquote",[a("p",[t._v("CPU 和内存以及其他设备之间，也需要通信，因此我们用一种特殊的设备进行控制，就是总线。总线分成 3 种：")])]),t._v(" "),a("ul",[a("li",[t._v("一种是地址总线，专门用来指定 CPU 将要操作的内存地址。")]),t._v(" "),a("li",[t._v("还有一种是数据总线，用来读写内存中的数据。")])]),t._v(" "),a("blockquote",[a("p",[t._v("当 CPU 需要读写内存的时候，先要通过地址总线来指定内存地址，再通过数据总线来传输数据。")])]),t._v(" "),a("ul",[a("li",[t._v("最后一种总线叫作控制总线，用来发送和接收关键信号，比如后面我们会学到的中断信号，还有设备复位、就绪等信号，都是通过控制总线传输。同样的，CPU 需要对这些信号进行响应，这也需要控制总线。")])]),t._v(" "),a("h5",{attrs:{id:"你可能会好奇数据如何通过线路传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你可能会好奇数据如何通过线路传递"}},[t._v("#")]),t._v(" 你可能会好奇数据如何通过线路传递")]),t._v(" "),a("p",[t._v("如果只有一条线路，每次只能传递 1 个信号，因为你必须在 0,1 中选一个。比如你构造高高低低这样的信号，其实就是 1100，相当于你传了一个数字 10 过去。大家注意，这种传递是相当慢的，因为你需要传递 4 次。\n这种一个一个信号发送的方式，我们叫作串行。如果希望每次多传一些数据，就需要增加线路，也就是需要并行。\n如果只有 1 条地址总线，那每次只能表示 0-1 两种情况，所以只能操作 2 个内存地址；如果有 10 条地址总线，一次就可以表示 210 种情况，也就是可以操作 1024 个内存地址；如果你希望操作 4G 的内存，那么就需要 32 条线，因为 2^32 是 4G。\n数据是通过高低电压传输(高1,低0)，并行传递信号可提升传输效率。线路位宽限制了每次并行传输的最大信号量。如果是32位地址总线则可以操作2^32位内存(4G)9. 32位宽CPU操作64位数据时，需要分为两次32位操作。32位操作系统无法控制高于32位的总线。64位相对于32位的优势：因为一次性并行传输的信号量以及CPU的处理能力从2^32 变成了 2^64，因此可以操作的数据量和内存地址范围都变成了32位的2次幂")])])}),[],!1,null,null,null);_.default=s.exports}}]);