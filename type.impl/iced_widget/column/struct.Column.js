(function() {var type_impls = {
"cosmic":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Column%3C'a,+Message,+Theme,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#28-30\">source</a><a href=\"#impl-Column%3C'a,+Message,+Theme,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#33\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_widget/column/struct.Column.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates an empty <a href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\"><code>Column</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_children\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#46-48\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_widget/column/struct.Column.html#tymethod.with_children\" class=\"fn\">with_children</a>(\n    children: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"iced_core/element/struct.Element.html\" title=\"struct iced_core::element::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a <a href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\"><code>Column</code></a> with the given elements.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.spacing\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#57\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_widget/column/struct.Column.html#tymethod.spacing\" class=\"fn\">spacing</a>(\n    self,\n    amount: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_core/pixels/struct.Pixels.html\" title=\"struct iced_core::pixels::Pixels\">Pixels</a>&gt;\n) -&gt; <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the vertical spacing <em>between</em> elements.</p>\n<p>Custom margins per element do not exist in iced. You should use this\nmethod instead! While less flexible, it helps you keep spacing between\nelements consistent.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.padding\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#63\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_widget/column/struct.Column.html#tymethod.padding\" class=\"fn\">padding</a>&lt;P&gt;(self, padding: P) -&gt; <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_core/padding/struct.Padding.html\" title=\"struct iced_core::padding::Padding\">Padding</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Sets the <a href=\"iced_core/padding/struct.Padding.html\" title=\"struct iced_core::padding::Padding\"><code>Padding</code></a> of the <a href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\"><code>Column</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.width\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#69\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_widget/column/struct.Column.html#tymethod.width\" class=\"fn\">width</a>(\n    self,\n    width: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced_core/length/enum.Length.html\" title=\"enum iced_core::length::Length\">Length</a>&gt;\n) -&gt; <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the width of the <a href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\"><code>Column</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.height\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#75\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_widget/column/struct.Column.html#tymethod.height\" class=\"fn\">height</a>(\n    self,\n    height: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced_core/length/enum.Length.html\" title=\"enum iced_core::length::Length\">Length</a>&gt;\n) -&gt; <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the height of the <a href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\"><code>Column</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_width\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#81\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_widget/column/struct.Column.html#tymethod.max_width\" class=\"fn\">max_width</a>(\n    self,\n    max_width: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_core/pixels/struct.Pixels.html\" title=\"struct iced_core::pixels::Pixels\">Pixels</a>&gt;\n) -&gt; <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the maximum width of the <a href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\"><code>Column</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.align_items\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#87\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_widget/column/struct.Column.html#tymethod.align_items\" class=\"fn\">align_items</a>(\n    self,\n    align: <a class=\"enum\" href=\"iced_core/alignment/enum.Alignment.html\" title=\"enum iced_core::alignment::Alignment\">Alignment</a>\n) -&gt; <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the horizontal alignment of the contents of the <a href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\"><code>Column</code></a> .</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#93-96\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_widget/column/struct.Column.html#tymethod.push\" class=\"fn\">push</a>(\n    self,\n    child: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_core/element/struct.Element.html\" title=\"struct iced_core::element::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Adds an element to the <a href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\"><code>Column</code></a>.</p>\n</div></details></div></details>",0,"cosmic::widget::column::Column"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Column%3C'a,+Message,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#113-115\">source</a><a href=\"#impl-Default-for-Column%3C'a,+Message,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Renderer&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#117\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Renderer&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","cosmic::widget::column::Column"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Widget%3CMessage,+Theme,+Renderer%3E-for-Column%3C'a,+Message,+Theme,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#122-125\">source</a><a href=\"#impl-Widget%3CMessage,+Theme,+Renderer%3E-for-Column%3C'a,+Message,+Theme,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"iced_widget/column/struct.Column.html\" title=\"struct iced_widget::column::Column\">Column</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.children\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#127\">source</a><a href=\"#method.children\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.children\" class=\"fn\">children</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>&gt;</h4></section></summary><div class='docblock'>Returns the state <a href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\"><code>Tree</code></a> of the children of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.diff\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#131\">source</a><a href=\"#method.diff\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.diff\" class=\"fn\">diff</a>(&amp;mut self, tree: &amp;mut <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>)</h4></section></summary><div class='docblock'>Reconciliates the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a> with the provided <a href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\"><code>Tree</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#135\">source</a><a href=\"#method.size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced_core/size/struct.Size.html\" title=\"struct iced_core::size::Size\">Size</a>&lt;<a class=\"enum\" href=\"iced_core/length/enum.Length.html\" title=\"enum iced_core::length::Length\">Length</a>&gt;</h4></section></summary><div class='docblock'>Returns the <a href=\"iced_core/size/struct.Size.html\" title=\"struct iced_core::size::Size\"><code>Size</code></a> of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a> in lengths.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.layout\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#142-147\">source</a><a href=\"#method.layout\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#tymethod.layout\" class=\"fn\">layout</a>(&amp;self, tree: &amp;mut <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>, renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Renderer</a>, limits: &amp;<a class=\"struct\" href=\"iced_core/layout/limits/struct.Limits.html\" title=\"struct iced_core::layout::limits::Limits\">Limits</a>) -&gt; <a class=\"struct\" href=\"iced_core/layout/node/struct.Node.html\" title=\"struct iced_core::layout::node::Node\">Node</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced_core/layout/node/struct.Node.html\" title=\"struct iced_core::layout::node::Node\"><code>layout::Node</code></a> of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>. <a href=\"cosmic/widget/trait.Widget.html#tymethod.layout\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.operate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#164-170\">source</a><a href=\"#method.operate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.operate\" class=\"fn\">operate</a>(\n    &amp;self,\n    tree: &amp;mut <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>,\n    layout: <a class=\"struct\" href=\"iced_core/layout/struct.Layout.html\" title=\"struct iced_core::layout::Layout\">Layout</a>&lt;'_&gt;,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Renderer</a>,\n    operation: &amp;mut dyn <a class=\"trait\" href=\"cosmic/widget/trait.Operation.html\" title=\"trait cosmic::widget::Operation\">Operation</a>&lt;<a class=\"enum\" href=\"iced_core/widget/operation/enum.OperationOutputWrapper.html\" title=\"enum iced_core::widget::operation::OperationOutputWrapper\">OperationOutputWrapper</a>&lt;Message&gt;&gt;\n)</h4></section></summary><div class='docblock'>Applies an <a href=\"cosmic/widget/trait.Operation.html\" title=\"trait cosmic::widget::Operation\"><code>Operation</code></a> to the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#184-194\">source</a><a href=\"#method.on_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.on_event\" class=\"fn\">on_event</a>(\n    &amp;mut self,\n    tree: &amp;mut <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>,\n    event: <a class=\"enum\" href=\"iced_core/event/enum.Event.html\" title=\"enum iced_core::event::Event\">Event</a>,\n    layout: <a class=\"struct\" href=\"iced_core/layout/struct.Layout.html\" title=\"struct iced_core::layout::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"iced_core/mouse/cursor/enum.Cursor.html\" title=\"enum iced_core::mouse::cursor::Cursor\">Cursor</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Renderer</a>,\n    clipboard: &amp;mut dyn <a class=\"trait\" href=\"iced_core/clipboard/trait.Clipboard.html\" title=\"trait iced_core::clipboard::Clipboard\">Clipboard</a>,\n    shell: &amp;mut <a class=\"struct\" href=\"iced_core/shell/struct.Shell.html\" title=\"struct iced_core::shell::Shell\">Shell</a>&lt;'_, Message&gt;,\n    viewport: &amp;<a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>\n) -&gt; <a class=\"enum\" href=\"iced_core/event/enum.Status.html\" title=\"enum iced_core::event::Status\">Status</a></h4></section></summary><div class='docblock'>Processes a runtime <a href=\"iced_core/event/enum.Event.html\" title=\"enum iced_core::event::Event\"><code>Event</code></a>. <a href=\"cosmic/widget/trait.Widget.html#method.on_event\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mouse_interaction\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#214-221\">source</a><a href=\"#method.mouse_interaction\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.mouse_interaction\" class=\"fn\">mouse_interaction</a>(\n    &amp;self,\n    tree: &amp;<a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>,\n    layout: <a class=\"struct\" href=\"iced_core/layout/struct.Layout.html\" title=\"struct iced_core::layout::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"iced_core/mouse/cursor/enum.Cursor.html\" title=\"enum iced_core::mouse::cursor::Cursor\">Cursor</a>,\n    viewport: &amp;<a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Renderer</a>\n) -&gt; <a class=\"enum\" href=\"iced_core/mouse/interaction/enum.Interaction.html\" title=\"enum iced_core::mouse::interaction::Interaction\">Interaction</a></h4></section></summary><div class='docblock'>Returns the current <a href=\"iced_core/mouse/interaction/enum.Interaction.html\" title=\"enum iced_core::mouse::interaction::Interaction\"><code>mouse::Interaction</code></a> of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>. <a href=\"cosmic/widget/trait.Widget.html#method.mouse_interaction\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#235-244\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#tymethod.draw\" class=\"fn\">draw</a>(\n    &amp;self,\n    tree: &amp;<a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;mut Renderer</a>,\n    theme: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Theme</a>,\n    style: &amp;<a class=\"struct\" href=\"iced_core/renderer/struct.Style.html\" title=\"struct iced_core::renderer::Style\">Style</a>,\n    layout: <a class=\"struct\" href=\"iced_core/layout/struct.Layout.html\" title=\"struct iced_core::layout::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"iced_core/mouse/cursor/enum.Cursor.html\" title=\"enum iced_core::mouse::cursor::Cursor\">Cursor</a>,\n    viewport: &amp;<a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>\n)</h4></section></summary><div class='docblock'>Draws the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a> using the associated <code>Renderer</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.overlay\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#259-264\">source</a><a href=\"#method.overlay\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.overlay\" class=\"fn\">overlay</a>&lt;'b&gt;(\n    &amp;'b mut self,\n    tree: &amp;'b mut <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>,\n    layout: <a class=\"struct\" href=\"iced_core/layout/struct.Layout.html\" title=\"struct iced_core::layout::Layout\">Layout</a>&lt;'_&gt;,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Renderer</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"iced_core/overlay/element/struct.Element.html\" title=\"struct iced_core::overlay::element::Element\">Element</a>&lt;'b, Message, Theme, Renderer&gt;&gt;</h4></section></summary><div class='docblock'>Returns the overlay of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>, if there is any.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drag_destinations\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/column.rs.html#288-293\">source</a><a href=\"#method.drag_destinations\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.drag_destinations\" class=\"fn\">drag_destinations</a>(\n    &amp;self,\n    state: &amp;<a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>,\n    layout: <a class=\"struct\" href=\"iced_core/layout/struct.Layout.html\" title=\"struct iced_core::layout::Layout\">Layout</a>&lt;'_&gt;,\n    dnd_rectangles: &amp;mut <a class=\"struct\" href=\"iced_core/clipboard/struct.DndDestinationRectangles.html\" title=\"struct iced_core::clipboard::DndDestinationRectangles\">DndDestinationRectangles</a>\n)</h4></section></summary><div class='docblock'>Adds the drag destination rectangles of the widget.\nRuns after the layout phase for each widget in the tree.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#51\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced_core/size/struct.Size.html\" title=\"struct iced_core::size::Size\">Size</a>&lt;<a class=\"enum\" href=\"iced_core/length/enum.Length.html\" title=\"enum iced_core::length::Length\">Length</a>&gt;</h4></section></summary><div class='docblock'>Returns a <a href=\"iced_core/size/struct.Size.html\" title=\"struct iced_core::size::Size\"><code>Size</code></a> hint for laying out the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>. <a href=\"cosmic/widget/trait.Widget.html#method.size_hint\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.tag\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#81\">source</a><a href=\"#method.tag\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.tag\" class=\"fn\">tag</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tag.html\" title=\"struct iced_core::widget::tree::Tag\">Tag</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced_core/widget/tree/struct.Tag.html\" title=\"struct iced_core::widget::tree::Tag\"><code>Tag</code></a> of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.state\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#88\">source</a><a href=\"#method.state\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.state\" class=\"fn\">state</a>(&amp;self) -&gt; <a class=\"enum\" href=\"iced_core/widget/tree/enum.State.html\" title=\"enum iced_core::widget::tree::State\">State</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced_core/widget/tree/enum.State.html\" title=\"enum iced_core::widget::tree::State\"><code>State</code></a> of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#163\">source</a><a href=\"#method.id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.id\" class=\"fn\">id</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cosmic/widget/struct.Id.html\" title=\"struct cosmic::widget::Id\">Id</a>&gt;</h4></section></summary><div class='docblock'>Returns the id of the widget</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#169\">source</a><a href=\"#method.set_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.set_id\" class=\"fn\">set_id</a>(&amp;mut self, _id: <a class=\"struct\" href=\"cosmic/widget/struct.Id.html\" title=\"struct cosmic::widget::Id\">Id</a>)</h4></section></summary><div class='docblock'>Sets the id of the widget\nThis may be called while diffing the widget tree</div></details></div></details>","Widget<Message, Theme, Renderer>","cosmic::widget::column::Column"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()